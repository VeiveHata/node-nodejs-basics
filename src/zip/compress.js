import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createGzip } from "zlib";

const fileToCompressPath = "src/zip/files/fileToCompress.txt";
const compressedFilePath = "src/zip/files/archive.gz";

const compress = async () => {
  const readStream = createReadStream(fileToCompressPath);
  const gzipStream = createGzip();
  const writeStream = createWriteStream(compressedFilePath);

  pipeline(readStream, gzipStream, writeStream, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
