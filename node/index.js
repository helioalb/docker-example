const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Estou rodando no node</h1>')
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
