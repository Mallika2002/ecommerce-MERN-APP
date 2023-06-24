const connectDB = require("../config/db")
connectDB();

const categoryData = require("./categories")
const Category = require("../models/CategoryModel")

const productData = require("./products")
const Product = require("../models/ProductModel")

const reviewData = require("./reviews")
const Review = require("../models/ReviewModel")

const userData = require("./users")
const User = require("../models/UserModel")

const orderData = require("./orders")
const Order = require("../models/OrderModel")

const importData = async () => {
    try{
        await Category.collection.dropIndexes() //=> delete all existing indexes
        await Product.collection.dropIndexes()

        await Category.collection.deleteMany({}) //delete all existing data
        await Product.collection.deleteMany({})
        await Review.collection.deleteMany({})
        await User.collection.deleteMany({})
        await Order.collection.deleteMany({})

        await Category.insertMany(categoryData) //insert new data
        const reviews = await Review.insertMany(reviewData)
        const sampleProducts = productData.map((product) => {
            reviews.map((review) => {
                product.reviews.push(review._id)
            })
            return {...product}
        })
        await Product.insertMany(sampleProducts)
        await User.insertMany(userData)
        await Order.insertMany(orderData)
        
        console.log("Seeder data proceeeded successfully")
        process.exit()
    }catch(error){
        console.log("Error while processing seeder data",error)
        process.exit(1)
    }
}

importData()