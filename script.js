function chunkString(str, size) {
  if (!str) return [];

  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}

function processChunk() {
  const inputStr = document.getElementById('inputStr').value;
  const chunkSize = parseInt(document.getElementById('chunkSize').value, 10);

  if (!chunkSize || chunkSize <= 0) {
    document.getElementById('result').textContent = "Chunk size must be a positive number.";
    return;
  }

  const result = chunkString(inputStr, chunkSize);
  document.getElementById('result').textContent = JSON.stringify(result, null, 2);
}
