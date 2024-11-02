# Cosinity

[![NPM Version](https://img.shields.io/npm/v/cosinity.svg)](https://www.npmjs.com/package/cosinity)
[![Downloads](https://img.shields.io/npm/dt/cosinity.svg)](https://www.npmjs.com/package/cosinity)

Cosinity is a lightweight, zero-dependency NPM package for calculating the cosine similarity between two vectors. It's particularly useful for working with vector embeddings, such as those obtained from the OpenAI Embedding API, enabling applications in semantic similarity, recommendation systems, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [ES6 Modules](#es6-modules)
  - [CommonJS](#commonjs)
- [API](#api)
- [Examples](#examples)
  - [Basic Example](#basic-example)
  - [Using with OpenAI Embeddings](#using-with-openai-embeddings)
- [Error Handling](#error-handling)
- [Performance Considerations](#performance-considerations)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Lightweight**: Minimalistic implementation without external dependencies.
- **Flexible**: Works with both ES6 Modules (`import`) and CommonJS (`require`).
- **TypeScript Support**: Built-in TypeScript type definitions for type safety.
- **Zero Dependencies**: No additional packages required.
- **High Performance**: Optimized for performance with large vectors.

## Installation

You can install Cosinity via NPM:

```bash
npm install cosinity
```

Or with Yarn:

```bash
yarn add cosinity
```

## Usage

### ES6 Modules

```javascript
import { cosineSimilarity } from "cosinity";

const vectorA = [1, 2, 3];
const vectorB = [4, 5, 6];

const similarity = cosineSimilarity(vectorA, vectorB);
console.log("Cosine Similarity:", similarity);
```

### CommonJS

```javascript
const { cosineSimilarity } = require("cosinity");

const vectorA = [1, 2, 3];
const vectorB = [4, 5, 6];

const similarity = cosineSimilarity(vectorA, vectorB);
console.log("Cosine Similarity:", similarity);
```

## API

### `cosineSimilarity(vectorA, vectorB)`

Calculates the cosine similarity between two vectors.

#### Parameters

- `vectorA` **`number[]`**: The first vector.
- `vectorB` **`number[]`**: The second vector.

#### Returns

- **`number`**: The cosine similarity between `vectorA` and `vectorB`. The value ranges from `-1` (exact opposite) to `1` (exact same), where `0` indicates orthogonality (no similarity).

#### Throws

- **`Error`**: If the input vectors are not of the same length or are empty.

## Examples

### Basic Example

```javascript
import { cosineSimilarity } from "cosinity";

const vectorA = [0, 1];
const vectorB = [1, 0];

const similarity = cosineSimilarity(vectorA, vectorB);
console.log("Cosine Similarity:", similarity); // Output: 0
```

### Using with OpenAI Embeddings

Cosinity can be integrated with OpenAI's Embedding API to calculate the similarity between text snippets.

```javascript
import OpenAI from "openai";
import { cosineSimilarity } from "cosinity";

const openai = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY", // Replace with your OpenAI API key
});

async function getEmbedding(text) {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    encoding_format: "float",
  });
  return response.data[0].embedding;
}

async function compareTexts(text1, text2) {
  const [embedding1, embedding2] = await Promise.all([
    getEmbedding(text1),
    getEmbedding(text2),
  ]);

  const similarity = cosineSimilarity(embedding1, embedding2);

  console.log(
    `Cosine Similarity between "${text1}" and "${text2}":`,
    similarity
  );
}

compareTexts("Hello, world!", "Hi, universe!");
```

#### Sample Output

```
Cosine Similarity between "Hello, world!" and "Hi, universe!": 0.87654321
```

## Error Handling

The `cosineSimilarity` function performs input validation:

- **Vector Length Mismatch**: Throws an error if vectors `vectorA` and `vectorB` are not of the same length.
- **Empty Vectors**: Throws an error if either vector is empty.
- **Non-Numeric Values**: Throws an error if vectors contain non-numeric values.

Example:

```javascript
try {
  cosineSimilarity([1, 2], [1, 2, 3]);
} catch (error) {
  console.error(error.message); // Output: Vectors must be of the same length and not empty.
}
```

## Performance Considerations

- **Large Vectors**: Cosinity is optimized for performance, but when working with extremely large vectors (e.g., embeddings with thousands of dimensions), consider batching or streaming if you experience performance issues.
- **Floating-Point Precision**: Be aware of floating-point precision limitations when dealing with very small or very large numbers.

## Contributing

Contributions are welcome!

1. **Fork** the repository.
2. **Clone** your fork:

   ```bash
   git clone https://github.com/develanet/cosinity.git
   ```

3. **Create** a new branch:

   ```bash
   git checkout -b feature/my-new-feature
   ```

4. **Commit** your changes:

   ```bash
   git commit -am 'Add new feature'
   ```

5. **Push** to the branch:

   ```bash
   git push origin feature/my-new-feature
   ```

6. **Submit** a Pull Request.

Please make sure your code passes existing tests and add new tests for your features.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/develanet/cosinity/blob/main/LICENSE) file for details.

---

Made with ❤️ by [Zay](https://github.com/develanet)

## Acknowledgments

- Inspired by the need for a simple way to calculate cosine similarity for vector embeddings.
- Thanks to the OpenAI community for the support and collaboration.

## Contact

For any questions or suggestions, feel free to open an issue or contact me at [isaias@develanet.com](mailto:isaias@develanet.com).
