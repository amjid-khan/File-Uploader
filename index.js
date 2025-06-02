import path from "path"
import express from "express"

const app = express()
const PORT = 8000

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("homepage")
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})