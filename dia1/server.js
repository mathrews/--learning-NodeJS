// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//     response.write('hello'.toUpperCase())

//     return response.end()
// });

// server.listen(3000);

import { fastify } from "fastify";
import { DatabaseMemory } from "./db";

const server = fastify();

const database = new DatabaseMemory();

server.get("/", () => {
  return "Hello!";
});

server.post("/videos", () => {
  database.create({
    title: "Video 01",
    description: "This is video 01",
    duration: 180,
  });
});

server.put("/videos/:id", () => {
  return "Hello, NodeJS!";
});

server.delete("/videos/:id", () => {
  return "Hello, NodeJS!";
});

server.listen({
  port: 3000,
});
