#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { v4 as uuidv4 } from "uuid";

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: node uuidv4.js <path-to-json-file>");
  process.exit(1);
}

const absolutePath = path.resolve(filePath);

if (!fs.existsSync(absolutePath)) {
  console.error(`File not found: ${absolutePath}`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(absolutePath, "utf8"));

const addId = (obj) => {
  if (obj && !obj.id) {
    obj.id = uuidv4();
  }
};

if (Array.isArray(data.products)) {
  for (const product of data.products) {
    addId(product);

    if (Array.isArray(product.variants)) {
      for (const variant of product.variants) {
        addId(variant);
      }
    }
  }
}

if (Array.isArray(data.plans)) {
  for (const plan of data.plans) {
    addId(plan);
  }
}

if (Array.isArray(data.protections)) {
  for (const protection of data.protections) {
    addId(protection);
  }
}

fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2) + "\n");

console.log(`✅ Successfully added UUIDs to ${absolutePath}`);