import fs from "fs";

const filePath = "src/streams/files/fileToRead.txt";

const read = async () => {
  const writableStream = new Stream.Writable({
    write(chunk, encoding, next) {
    console.log(chunk.toString());
    next();
}
});

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("error", (error) => {
    console.error(error);
  });
};

await read();
