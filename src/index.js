import express from 'express'
import Producs from './routes/Product.routes.js'
import Category from './routes/Category.routes.js'

const app = express()
const PORT = 3000;

app.use(express.json())

app.use("/api", Producs)
app.use("/api", Category)


app.listen( PORT, () => {
    console.log(`Server on port ${PORT}`)
})

