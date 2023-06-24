const Category = require('../models/CategoryModel')

const getCategories = async (req, res, next) => {
    // res.send("Handling category routes e.g. search for categories")
    try {
        const categories = await Category.find({}).sort({ name: "asc" }).orFail()
        res.json(categories)
    } catch (error) {
        next(error)
    }
}

const newCategory = async (req, res, next) => {
    try {
        // res.send(!!req.body)

        const { category } = req.body
        if (!category) {
            res.status(400).send("Category input is required")
            // throw new Error("Category input is required")
        }
        const categoryExists = await Category.findOne({ name: category })
        if (categoryExists) {
            res.status(400).send("Category already exists")
            // throw new Error("Category already exists")
        } else {
            const categoryCreated = await Category.create({
                name: category
            })
            res.status(201).send({categoryCreated: categoryCreated})
        }
        res.send(category)
    } catch (error) {
        next(error)
    }

}

module.exports = { getCategories, newCategory }