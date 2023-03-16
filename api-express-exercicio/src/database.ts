import { CATEGORIAS, Product, Purchase, User } from "./types";



export const users: User[] = [
    {
        id: "c001",
       email:"joanadayse@email.com",
       password:"12345"
    },
    {
        id: "c002",
        email:"joanaematheus@email.com",
        password:"12346"
    },
    {
        id: "c003",
        email:"joana@email.com",
        password:"12347"
    }
]


export const products: Product[]=[
    {
        id : "1",
        name: "bolsa",
        price: 6,
        category: CATEGORIAS.ACCESSORIES
    },
    {
        id : "2",
        name: "blusa",
        price: 10,
        category: CATEGORIAS.CLOTHES_AND_SHOES
    },
    {
        id : "3",
        name: "celular",
        price: 50,
        category: CATEGORIAS.ELECTRONICS
    },        
]

export const purchases: Purchase[]=[
    {
        userId : "1",
    productId: "1",
    quantity: 2,
    totalPrice: "12"
    },
    {
        userId : "2",
    productId: "2",
    quantity: 2,
    totalPrice: "20"
    },  
    {
        userId : "3",
    productId: "3",
    quantity: 2,
    totalPrice: "100"
    },        
]

