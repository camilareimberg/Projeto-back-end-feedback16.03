
import  express, { Request, Response} from 'express'


import cors from 'cors';
import { baseProduct, baseUser } from './database';


const app = express();

app.use(express.json());


app.use(cors());

 
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get("/products/:id" , (req:Request, res:Response)=>{
    res.status(200).send("objeto product encontrado")
})

app.get("/users/:id/purchases" , (req:Request, res:Response)=>{
    res.status(200).send("array de compras do user procurado")
})

app.delete("/users/:id", (req:Request, res:Response)=>{
    const id = req.params.id
   

    const indexToRemove= baseUser.findIndex((user)=>{
        return user.id === id
    })

    if (indexToRemove >=0){
        baseUser.splice(indexToRemove,1)

    }

    res.status(200).send("User apagado com sucesso")

})

app.delete("/products/:id", (req:Request, res:Response)=>{
    const id = req.params.id
   

    const indexToRemove= baseProduct.findIndex((product)=>{
        return product.id === id
    })

    if (indexToRemove >=0){
        baseProduct.splice(indexToRemove,1)

    }

    res.status(200).send("Produto apagado com sucesso")

})

app.put('/users/:id' , (req: Request, res: Response)=>{
    const id= req.params.id 

    const newId = req.body.id
    const newEmail= req.body.email
    const newPassword= req.body.password
  

    const user= baseUser.find((user)=>{
        return user.id === id
    })

    if(user){
        user.id= newId || user.id
        user.email= newEmail || user.email
        user.password= newPassword || user.password
      
    }

    res.status(200).send("Atualização realizada")

})

app.put('/products/:id' , (req: Request, res: Response)=>{
    const id= req.params.id 

    const newId = req.body.id
    const newName= req.body.name
    const newPrice= req.body.price

  
  

    const product= baseProduct.find((product)=>{
        return product.id === id
    })

    if(product){
        product.id= newId || product.id
        product.name= newName || product.name
        product.price= newPrice || product.price
      
    }

    res.status(200).send("Atualização realizada")

})