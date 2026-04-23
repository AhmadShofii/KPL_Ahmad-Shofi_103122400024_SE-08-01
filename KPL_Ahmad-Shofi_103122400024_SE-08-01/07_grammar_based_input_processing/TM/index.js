/**
 * @param {string} text
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    const result = {
        agents: {},
        Sitemap: []
    };

    let currentAgents = [];

    const lines = text.split(/\r?\n/);

    for (let rawLine of lines) {
        let line = rawLine.trim();

        // Skip kosong / komentar
        if (!line || line.startsWith("#")) continue;

        // Hapus komentar inline
        const commentIndex = line.indexOf("#");
        if (commentIndex !== -1) {
            line = line.slice(0, commentIndex).trim();
        }

        if (!line) continue;

        const [keyRaw, ...rest] = line.split(":");
        if (!rest.length) continue;

        const key = keyRaw.trim().toLowerCase();
        const value = rest.join(":").trim();

        if (!value) continue;

        // USER-AGENT
        if (key === "user-agent") {
            const agent = value.toLowerCase();

            if (!result.agents[agent]) {
                result.agents[agent] = {
                    Allow: [],
                    Disallow: []
                };
            }

            currentAgents = [agent];
        }

        // ALLOW
        else if (key === "allow") {
            for (const agent of currentAgents) {
                result.agents[agent].Allow.push(value);
            }
        }

        // DISALLOW
        else if (key === "disallow") {
            for (const agent of currentAgents) {
                result.agents[agent].Disallow.push(value);
            }
        }

        // SITEMAP (GLOBAL)
        else if (key === "sitemap") {
            result.Sitemap.push(value);
        }
    }

    return result;
}

module.exports = parseRobots;