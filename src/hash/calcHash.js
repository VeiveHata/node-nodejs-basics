import crypto, { createHmac } from "crypto";
import fs from "fs";

const filePath = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  const hash = await crypto.createHash("sha256");
  const stream = await fs.createReadStream(filePath);

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    const hashValue = hash.digest("hex");
    console.log(hashValue);
  });

  stream.on("error", (error) => {
    console.error(error);
  });
};

await calculateHash();
