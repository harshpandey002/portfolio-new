---
title: "Basics of Blockchain and Cryptography"
slug: "basics-of-blockchain-cryptography"
description: "Learn the cryptography fundamentals. What are hash functions? How are they important to blockchains? What exactly is Mining and Proof of work? What makes blockchains work?"
image: ""
squareImage: "../bitcoinIcon.png"
date: "Dec 28, 2022"
tags: ["Blockchain", "Cryptography"]
isLive: false
---

## 👋 Welcome

Hi, I'm [Harsh Pandey](https://harshkumarpandey.com). This blog post was initially intended to be just note thing for me, but later I thought, why not post this as blog for other peeps to learns as **well**.

In this blog we'll be covering the very basics of blockchain, mostly the theory part of it. This will help with the interview for getting a job in web3 space.

## 👀 Prerequisites

You already know the difference b/w web2 and web3 and are now intrested in learning more about how everything works in web3.

## 🤔 What is the purpose of blockchain?

The purpose of a blockchain is to have a **network of computers agree upon a common state of data**. Plain and simple. Any person or organization should be able to participate in this process. No person or organization should be able to control this process.

> Generally the term **consensus** is used to describe a network coming to an agreement on the state of the data. You'll hear this word quite often in regards to blockchain!

👆 So there you have it! The high-level goals of blockchain. Not so bad, huh?

## Why is blockchain needed for cryptocurrency?

Let's say you are a bank, There are 3 person(A, b and C) who has a account in the bank(you) each having 10INR in the bank.

- A wants to send 5INR to C.
- After the transaction, A has 5INR and C has 15INR.
- After some days, more people opens bank acc in the same bank.
- Now you have to **handle all the transactions** and **maintain balance book** for every person.
- People need to **trust** you that you wont cheat them by manipulating any data or something.

We know how to solve the first two problems with our **programming skills**! We can build a website with an awesome UI and an API for making transactions!

But what about the 3rd problem? How do we solve for **trust**?

This was a problem that ate at Cryptography Enthusiasts for years.

In, 2008, such a system was imagined. A person or persons, under the pseudonym Satoshi Nakamoto released a whitepaper for Bitcoin. In this paper they described a system that would create a peer-to-peer network for exchanging value.

The paper describes a chain of blocks tied together cryptographically. This would later be coined the **blockchain**.

## 📜 Smart Contract Blockchains

Smart Contract blockchains provide developers with a way to decentralize where the code runs. In this way, code can truly become a public resource. This means code can run without any direct ownership, making it censorship resistant and transparently verifiable.

One important point to drill home is that the decentralization isn't about the code itself, but how the code is executed.

You take a piece of code(smart contract), compile it and deploy it to a decentralized blockchain. When you do that, the code becomes publicly available on the blockchain and the nodes in the network will enforce the logic of the code through the financial incentives of the blockchain protocol.

A smart contract is code that will always run the way it is programmed.

## #️⃣ Cryptographic Hash Functions

A hash function is a function which takes an input of any size and turns it into a fixed size output. Let's imagine a hash function that takes an input of any size and returns a fixed 32 byte output:

| INPUT           | INPUT SIZE    | OUTPUT    | OUTPUT SIZE |
| --------------- | ------------- | --------- | ----------- |
| 52              | 8 bytes       | 0x41cf... | 32 bytes    |
| "happy times"   | 22 bytes      | 0xd6bf... | 32 bytes    |
| monalisa.jpg    | 875000 bytes  | 0x7cde... | 32 bytes    |
| worldseries.mp4 | 1.6e+10 bytes | 0x9c0e... | 32 bytes    |

These inputs get larger from top to bottom but they always map to an output of 32 bytes. There are many different algorithms for hash functions which could take these inputs and create outputs of fixed sizes.

The specific types of hash functions we are going to focus on are cryptographic hash functions. These hash functions need five specific properties. They must be:

- **Deterministic** - One specific input always maps to the **same** specific output
- **Pseudorandom** - It is not possible to guess the output based on the output of similar inputs
- **One-way** - If someone gives you a new output, you could not determine an input without guessing
- **Fast to Compute** - It must be a quick calculation for a computer
- **Collision-resistant** - The chance of a collision should be infinitesimally small

## Digital Signatures

This slide below by [Alchemy University](https://university.alchemy.com/) explains it better than anything.

[https://docs.google.com/presentation/d/e/2PACX-1vSUqk6Uvnole2hTr9r7-UBcvmPquLhMNa_qPHL26BoVCk0v5j2EvsY2UyO6n2JbB7OfxJVArXlBPiAG/pub](https://docs.google.com/presentation/d/e/2PACX-1vSUqk6Uvnole2hTr9r7-UBcvmPquLhMNa_qPHL26BoVCk0v5j2EvsY2UyO6n2JbB7OfxJVArXlBPiAG/pub)

Today, both **RSA** and **ECDSA** are two popularly used algorithms for public key cryptography.

The [RSA](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>) algorithm is based on the idea that it's very easy to find the product of two prime numbers, yet extremely difficult to factor out those two prime numbers if you have the product.

The [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) algorithm uses elliptic curves. It can provide the same level security as other public key algorithms with smaller key sizes, which is the reason it's become quite popular. It is the Digital Signing Algorithm used by Bitcoin, specifically the [secp256k1](https://en.bitcoin.it/wiki/Secp256k1) curve.

> It is important to know that the **ECDSA signature scheme** allows the **public key to be recovered** from the signed **message** together with the **signature**.

## Let's see how it all works

We'll be using `ethereum-cryptography` [npm package](https://www.npmjs.com/package/ethereum-cryptography) as it provides us with all the cryptographic hash functions that is used by ethereum as the name suggests.

Let's First see how the messages can be hashed.

### Hashing the message

```js
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
  return keccak256(utf8ToBytes(message));
}
```

> Wondering what utf8 stands for? The UTF-8 standard translates all the possible keyboard characters you can think of into bytes. This is an agreed upon standard to ensure we all get the same bit values representing the letters and words we see on the screen.

### Signing Message

When signing a message with secp256k1 we can return the signature along with the [recovery bit](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages#ecdsa-public-key-recovery-from-signature), allowing us to recover the public key from the signature. This will allow a blockchain node to take a signature of a transaction and understand which address authenticated this particular transaction.

```js
const secp = require("ethereum-cryptography/secp256k1");
// import hashMessage function created earlier.
const hashMessage = require("./hashMessage");

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
  const signature = await secp.sign(hashMessage(msg), PRIVATE_KEY, {
    recovered: true,
  });
  return signature;
}
```

> The `ethereum-cryptography` library uses `noble-secp256k1`, so the import comes from ethereum-cryptography but the detailed documentation is in the readme of [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1).

### Recovering Public Key

When the signature is passed with all of its components (recovery bit included), the public key can be recovered. This means that blockchain nodes will be able to understand who signed the transaction that was sent to them.

```js
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
  return secp.recoverPublicKey(hashMessage(message), signature, recoveryBit);
}
```

### Retrieving address from public key

Bitcoin and Ethereum both have a transformation process to take a **public key and turn it into an address**. For Bitcoin it includes a **checksum and Base58 encoding**. Ethereum's address transformation is quite a bit simpler, its address is the **last 20 bytes of the hash of the public key**.

```js
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  return keccak256(publicKey.slice(1)).slice(-20);
}
```

## Consensus Mechanisms

In a decentralized environment, common issues are:

- How do all nodes agree on what the current and future state of user account balances and contract interactions is?
- Who gets to add new blocks/transactions to a chain? How do we know any blocks added are "valid"?
- How the heck are all of these things coordinated without any central actor in place?

The answer is **consensus mechanisms**.

Consensus means coming to a general agreement. **Blockchain consensus typically means at least 51% of nodes are in agreement over the current global state of the network**. Consensus mechanisms end up simply being rules that a distributed + decentralized blockchain network follows in order to stay in agreement over what is considered valid. Remember that consensus mechanisms are inter-changeable and there are many out there, like proof-of-stake.

## Proof of Work

Proof-of-work is the consensus mechanism that allows decentralized networks like Bitcoin and (previously) Ethereum to come to consensus, or agree on things like account balances and the order of transactions. This prevents users from "double spending" their coins and ensures that everyone is following the rules, making proof-of-work-based networks resistant to attack. The consensus mechanism ends up providing security to a blockchain network just because it demands that everyone follow the consensus rules if they want to participate!

In proof-of-work, **mining** is the "work" itself.

## Mining

**Mining** is process of creating a block of transactions to be added to a blockchain.

But how does that tie in to proof-of-work? Well, proof-of-work could just as well be called proof-of-mining!

In proof-of-work consensus, nodes in the network continuously attempt to extend the chain with new blocks - these are the miners, nodes that contain mining software. Miners are in charge of extending a blockchain by adding blocks that contain "valid" transactions. In order to add a block, the network will ask miners for their 'proof-of-work'.

A proof-of-work-based system will typically require miners produce an output in a very difficult-to-get target range. A valid proof-of-work would currently look like this in the Bitcoin network:

> 000000000000000000043f43161dc56a08ffd0727df1516c987f7b187f5194c6

Proof-of-work networks will typically have some sort of target_difficulty. In order for a miner to add a new block, they must find a proof-of-work lower than the network target difficulty. It's basically the network saying: "If you want to add a new block, you must provide a proof-of-work with 12 leading zeroes." The way the math works, finding such a diffcult-to-find output is proof enough that a miner expended considerable resources to secure the network. There is no way to cheat the system, you either have a valid proof of work or you don't.

Here's what the proof-of-work mining algorithm looks like:

1. Take current block’s block header, add mempool transactions
2. Append a nonce, starting at nonce = 0
3. Hash data from #1 and #2
4. Check hash versus target difficulty (provided by protocol)
5. If hash < target, puzzle is solved! Get rewarded.
6. Else, restart process from step #2, but increment nonce

## Let's see how exactly mining is done

Start with this template, we'll go step by step

```js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
}

function mine() {
  // TODO: mine a block
}
```

### Add transactions to the mempool.

Implementing the `addTransaction` function.

```js
function addTransaction(transaction) {
  mempool.push(transaction);
}
```

### Mine block

Update the `mine` fuction to create a new block with a unique identifier `id` and add it to our blocks array.

```js
function mine() {
  const block = {
    // Every block will have new id
    id: blocks.length,
  };

  // Mining the block by pushing it to blockchain(blocks)
  blocks.push(block);
}
```

### Add the Block Hash

Typically, all the information in the header of the block is hashed together to create a unique hash based on those properties.

If anything changes in the header, it will affect the hash. Since each block also contains the hash of the block before it, it will affect every future block as well.

```js
function mine() {
  const block = {
    id: blocks.length,
  };

  // Stringify the block, hash it and add the hash to the block.
  block.hash = SHA256(JSON.stringify(block));

  blocks.push(block);
}
```

### Mine Transaction

In Bitcoin, there is a specific block size limit that cannot be exceeded. The number of transactions that will fit inside of a block varies due to transactions being of all different sizes.

For the purposes of this exercise, we will use the MAX_TRANSACTIONS constant which is defined at the top (check template above).

So our goal here is to:

1. Inside the mine function, pull transactions off the mempool and include them in the block in an array called transactions
2. Remove each transaction you include in the block from the mempool
3. Add the transactions array to the block before hashing the block

> Do not include more transactions in the block than the MAX_TRANSACTIONS limit.

```js
function mine() {
  const block = {
    id: blocks.length,
  };

  // Calculating how many transactions will be added and making sure its not more than MAX_TRANSACTIONS limit.
  const till = mempool.length < 10 ? mempool.length : 10;
  const transactions = [];
  for (let i = 1; i <= till; i++) {
    // Popping the last transaction from mempool and pushing it to transactions array.
    transactions.push(mempool.pop());
  }

  // Adding all the transactions to the block we'll be mining
  block.transactions = transactions;

  // Hashing the block once transactions are added to the block.
  block.hash = SHA256(JSON.stringify(block));

  blocks.push(block);
}
```

### Getting the Proof of work
