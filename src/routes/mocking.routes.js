import { Router } from "express";
import { generateProduct } from "../utils/helpers.js";

const router = Router();

router.get("/", (req,res)=>{
    const cant = parseInt(req.query.cant) || 100;
    let products = [];
    for(let i=0;i<cant;i++){
        const product = generateProduct();
        products.push(product);
    }
    res.json({status:"success", data:products});
})

export {router as mockingRouter}