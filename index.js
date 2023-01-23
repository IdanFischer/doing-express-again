import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express()
app.use(express.json())
const env = process.env

const people = ["Danny", "Jiho"]

app.get('/',(req, res) => {
    res.sendFile("/Users/User/boca-code/week-03/express-again/hello.html")
})

app.get('/people', (req,res) => {
    res.send(people)
})

app.post('/newpeople', (req,res) => {
    const newPerson = req.body
    res.send(`the new person is ${newPerson}`)
})

// app.get('/coffee', (req, res) => {
//     const imagePath = 'Gogeta desktop wallpaper.jpg'
//     console.log('new request')
//     res.sendFile(imagePath)
// })

app.listen(env.PORT, () => {
    console.log(`Listening on localhost port: ${env.PORT}`);
})
