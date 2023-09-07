import { prisma } from "../prisma.js"

export const getCategories = async (req,res) => {
    const categories = await prisma.category.findMany({
        include: {
            products: true
        }
    });

    res.status(200).json({
        categories
    })
}

export const createCategory = async (req,res) => {
    const newCategory = await prisma.category.create({
        data: req.body
    }) 

    res.status(201).json({
        newCategory
    })
}

export const getCategory = async (req,res) => {

    try {
        
        const category = await prisma.category.findFirst({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                products: true
            }
        })

        if(!category){
            res.status(404).json({
                message: `No hay categoria con el id ${req.params.id}`,
                code: 404
            })
        }

        res.status(200).json({
            category
        })

    } catch (error) {
        console.log(error)
    }

}