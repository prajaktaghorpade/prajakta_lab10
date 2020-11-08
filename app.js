const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html')
})
app.post('/add', (req, res) => {
console.log(req.body);
const { firstNum, secondNum } = req.body
const add = parseInt(firstNum) + parseInt(secondNum)
console.log(add)
res.send({ result: add })
})
app.post('/sub', (req, res) => {
console.log(req.body);
const { firstNum, secondNum } = req.body
const sub = parseInt(firstNum) - parseInt(secondNum)
res.send({ result: sub })
})
app.post('/mul', (req, res) => {
console.log(req.body);
const { firstNum, secondNum } = req.body
const mul = parseInt(firstNum) * parseInt(secondNum)
res.send({ result: mul })
})
app.post('/div', (req, res) => {
console.log(req.body);
const { firstNum, secondNum } = req.body
const div = parseInt(firstNum) / parseInt(secondNum)
res.send({ result: div })
})
app.listen(port, () => console.log(`Server running on port ${port}`))
