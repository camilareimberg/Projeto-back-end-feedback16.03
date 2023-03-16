import express ,{ Request, Response } from "express"
import cors from 'cors'
import { products, purchases, users } from "./database"
import { Product, Purchase, User } from "./types"

const app = express()

app.use(express.json())
app.use(cors())



app.listen(3003,()=>{
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res:Response)=>{
    res.send("Pong!")
})

// rodar npm run dev

app.get('/users', (req:Request, res:Response)=>{
   res.status(200).send(users)
})

app.get('/products', (req:Request, res:Response)=>{
    res.status(200).send(products)
 })

 app.get('/products/search', (req:Request, res:Response)=>{
// variavel=chave
   const q= req.query.name as string
   const filterProduct= products.filter((product)=>{
    return product.name.includes(q)
   })
   
   
    res.status(200).send( q? filterProduct: products)
 })

 app.post('/users', (req:Request, res:Response)=>{
    // const body= req.body
    const {id,email, password}= req.body

    const newUers: User={
        id,
        email,
        password
    }

    users.push(newUers)
    res.status(201).send("Cadastro realizado com sucesso")
 })

 app.post('/products', (req:Request ,res:Response)=>{
    // const body= req.body
    const{id, name, price,category}=req.body

    const newProduct: Product={

        id,
        name,
        price,
        category
    }
     products.push(newProduct)
    res.status(201).send("Produto cadastrado com sucesso")
 })

 app.post('/purchases', (req:Request, res:Response)=>{
    // const body= req.body
    const {userId,productId,quantity,totalPrice}= req.body

    const newPurchases: Purchase={
        userId,
        productId,
        quantity,
        totalPrice
    }

    purchases.push(newPurchases)
    res.status(201).send("Compra realizada com sucesso")
 })