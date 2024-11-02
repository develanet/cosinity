/**
 * Calculates the cosine similarity between two vectors.
 *
 * @param {number[]} vectorA - The first vector.
 * @param {number[]} vectorB - The second vector.
 * @returns {number} The cosine similarity between vectorA and vectorB.
 * @throws {Error} If the input vectors are not of the same length.
 */
function cosineSimilarity(vectorA, vectorB) {
  // Ensure the vectors are of the same length
  if (vectorA.length !== vectorB.length) {
    throw new Error("Vectors must be of the same length");
  }

  // Calculate the dot product and magnitudes of the vectors
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let i = 0; i < vectorA.length; i++) {
    const a = vectorA[i];
    const b = vectorB[i];
    dotProduct += a * b;
    magnitudeA += a * a;
    magnitudeB += b * b;
  }

  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);

  // Handle the case where one of the vectors is all zeros
  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0; // Cosine similarity is zero if a vector is all zeros
  }

  // Calculate and return the cosine similarity
  return dotProduct / (magnitudeA * magnitudeB);
}

// Export the function for both CommonJS and ES Modules
module.exports = cosineSimilarity;
module.exports.cosineSimilarity = cosineSimilarity;
export default cosineSimilarity;
export { cosineSimilarity };
