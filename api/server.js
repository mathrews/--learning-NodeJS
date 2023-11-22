// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//     response.write('hello'.toUpperCase())

//     return response.end()
// });

// server.listen(3000);

import { fastify } from "fastify";
import { DatabaseMemory } from "./db.js";

const server = fastify();

const database = new DatabaseMemory();

server.get("/videos", (request) => {
  const search = request.query.search

  const videos = database.list(search)

  return videos;
});

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body
  
  database.create({
    title,
    description,
    duration
  });
  
  return reply.status(201).send();

});

server.put("/videos/:id", (request, reply) => {
  const videoID = request.params.id
  const { title, description, duration } = request.body

  if (videoID === "") {
    return reply.status(404).send();
  } else {
    database.update(videoID, {
      title,
      description,
      duration
    })
    return reply.status(204).send()
  }

});

server.delete("/videos/:id", (request, reply) => {
  const videoID = request.params.id

  if (videoID === null) {
    return reply.status(404).send();
  } else {
    database.delete(videoID);
    return reply.status(200).send()
  }

});

server.listen({
  port: 3000,
});
