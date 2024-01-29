import { Stream } from "stream";

const transform = async () => {
  const transformStream = new Stream.Transform({
    transform(chunk, encoding, next) {
      const data = chunk.toString().split("").reverse().join('');
      transformStream.push(data);
      next();
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
