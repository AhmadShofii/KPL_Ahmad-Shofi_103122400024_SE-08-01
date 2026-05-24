function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  for (let i = 0; i < data.length; i++) {
    try {
      const result = processData(data[i]);
      console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
    } catch (error) {
      console.log(`Item ${i + 1}: ${data[i]} -> Terjadi error: ${error.message}`);
    }
  }
}

function processData(data) {
  const str = data.toLowerCase();
  const num = parseInt(str);

  if (!isNaN(num) && str === String(num)) {
    return `Number: ${num * 2}`;
  }

  return `Teks: ${str} (panjangnya: ${str.length})`;
}

main();