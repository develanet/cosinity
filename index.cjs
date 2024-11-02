/**
 * Calculates the cosine similarity between two vectors.
 *
 * @param {number[]} vectorA - The first vector.
 * @param {number[]} vectorB - The second vector.
 * @returns {number} The cosine similarity between vectorA and vectorB.
 * @throws {Error} If the input vectors are not of the same length.
 */

function cosineSimilarity(vectorA, vectorB) {
  if (vectorA.length !== vectorB.length) {
    throw new Error("Vectors must be of the same length");
  }

  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let i = 0; i < vectorA.length; i++) {
    dotProduct += vectorA[i] * vectorB[i];
    magnitudeA += vectorA[i] ** 2;
    magnitudeB += vectorB[i] ** 2;
  }

  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);

  return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
}

module.exports = cosineSimilarity;
