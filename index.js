import express from 'express'

const app = express()
app.use(express.json())

app.get("/api/disponivel",(req,res) =>{
    res.send("São disponíveis a operações de: Somar, Diminuir, Multiplicar, Dividir, Potência e Raiz .")
})

app.post("/API/somar",(req,res) =>{
    const num1 = req.body.num1
    const num2 = req.body.num2
res.send({resultado : num1 + num2} )
})

app.post("/API/diminuir", (req,res) =>{
    const num1 = req.body.num1
    const num2 = req.body.num2
    res.send({resultado : num1 - num2})
})

app.post("/API/mutiplicar", (req,res) =>{
    const num1 = req.body.num1
    const num2 = req.body.num2
    res.send({resultado : num1 * num2})
})

app.post("/API/dividir", (req,res) =>{
    const num1 = req.body.num1
    const num2 = req.body.num2
    res.send({resultado: num1 / num2})
})

app.post("/API/potencia", (req,res) =>{
    const num1 = req.body.num1
    const num2 = req.body.num2
    res.send({resultado: num1**num2})
})

app.post ("/API/raiz",(req,res) =>{
    const num1 = req.body.num1
    const num2 = req.body.num2
    res.send({resultado: num1/num2})
})

app.listen(3000, () => {
    console.log("A porta do servidor é a 3000!")
})
