# Simple Blockchain Simulation

This project is a basic simulation of a blockchain built using JavaScript. It demonstrates core blockchain concepts such as block structure, hashing, linking blocks via previous hashes, and chain validation. A simple Proof-of-Work mechanism is also included.

## Features

- Block structure with:
  - Index
  - Timestamp
  - Transactions (dummy data)
  - Previous hash
  - Current hash
- SHA-256 hashing
- Chain integrity validation
- Basic Proof-of-Work (adjustable difficulty)
- Tampering detection demo

## Files

- `block.js`: Defines the structure of a block.
- `blockchain.js`: Handles the blockchain logic and validation.
- `main.js`: Simulates adding blocks to the chain and printing them.
- `tamper.js`: Demonstrates how tampering breaks chain integrity.
- `Dockerfile`: Optional Docker setup to run the simulation in a container.

### Run Locally

```bash
npm install
npm run start
```
### Docker
```bash
docker build -t simple-blockchain
docker run simple-blockchain
```
