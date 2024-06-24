import http from 'node:http'

const server = http.createServer((req, res) => {
  return res.end("Olá Mundo")
})

server.listen(3333)