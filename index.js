const express = require("express")
const app = express()

app.use(express.urlencoded({extended:false}))

app.use("/dogs", require("./controllers/dog"))

app.get("/", (req, res)=>{
    res.json({message: "it's the server hoooome route"})
})

app.listen(process.env.port || 8000, ()=>{
    console.log("it's me! it's a dog!!!")
})