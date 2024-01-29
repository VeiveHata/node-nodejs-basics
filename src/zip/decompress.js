import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createGunzip } from "zlib";

const fileToDeompressPath = "src/zip/files/archive.gz";
const decomressedFilePath = "src/zip/files/fileToCompress.txt";

const decompress = async () => {
  const readStream = createReadStream(fileToDeompressPath);
  const gunzipStream = createGunzip();
  const writeStream = createWriteStream(decomressedFilePath);

  pipeline(readStream, gunzipStream, writeStream, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();
