import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/routes.js'
import cors from 'cors'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// router.options('/send', cors());
app.use(cors())

app.use("/api", router)
// app.use(errorHandler)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});
app.listen(port, () => console.log(`Movies app listening at http://localhost:${port}`))


// function errorHandler(err, req, res, next) {
//     res.status(500).send({})
// }