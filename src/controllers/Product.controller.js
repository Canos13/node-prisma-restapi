import { prisma } from "../prisma.js";

export const getProducts = async (req,res) => { 
    const products = await prisma.product.findMany({
        include: {
            category: true
        }
    })

    res.status(200).json({
        products
    }) 

} 

export const createProducts = async (req,res) => {
    const newProduct = await prisma.product.create({
        data: req.body
    })

    res.status(201).json({
        newProduct
    }) 
}

export const getProduct = async (req,res) => {

    try {
        const product = await prisma.product.findFirst({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                category: true
            }
        })

        if(!product){
            return res.status(404).json({
                message: `No existe el producto con el id ${req.params.id}`,
                code: 404
            }) 
        }

        res.status(200).json({
            product
        }) 
        
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (req,res) => {

    try {
        const productDeleted = await prisma.product.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })

        res.status(200).json({
            message: `Producto con el id ${req.params.id} eliminado`,
            productDeleted
        })
    } catch (error) {
        res.status(500).json({
            err: error.meta
        })
    }
}

export const updateProduct = async (req,res) => {
    try {
        const productUpdated = await prisma.product.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
    
        res.status(200).json({
            message: `Producto con id: ${req.params.id} ha sido actualizado`,
            productUpdated
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}
