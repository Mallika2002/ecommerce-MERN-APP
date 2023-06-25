const Category = require('../models/CategoryModel')

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     description: Retrieve a list of all categories
 *     responses:
 *       200:
 *         description: Fetches all categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   image:
 *                     type: string
 *                   attrs:
 *                     type: string
 *                   __v:
 *                     type: integer
 */
const getCategories = async (req, res, next) => {
    // res.send("Handling category routes e.g. search for categories")
    try {
        const categories = await Category.find({}).sort({ name: "asc" }).orFail()
        res.json(categories)
    } catch (error) {
        next(error)
    }
}

 /**
 * @swagger
 * /categories:
 *   post:
 *     tags: [Categories]
 *     summary : Add a new category
 *     requestBody:
 *       description: JSON Object containing the category name
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *           example:
 *             category: "Category Name"
 *            
 *     responses:
 *       201:
 *         description: Returns a confirmation message
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   image:
 *                     type: string
 *                   attrs:
 *                     type: string
 *                   __v:
 *                     type: integer
 */
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
        // res.send(category)
    } catch (error) {
        next(error)
    }

}

module.exports = { getCategories, newCategory }