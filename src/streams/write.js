import fs from "fs";

const filePath = "src/streams/files/fileToWrite.txt";

const write = async () => {
  const stream = await fs.createWriteStream(filePath);

  process.stdin.pipe(stream);

  stream.on("error", (error) => {
    console.error(error);
  });
};

await write();
