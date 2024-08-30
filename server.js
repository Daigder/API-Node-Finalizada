const express = require('express')
const enderecoRoutes = require('./routes/routes')

const app = express()
const port = 3000

app.use(express.json())
app.use('/api', enderecoRoutes)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`servidor iniciado em https://localhost:${port}`);
})