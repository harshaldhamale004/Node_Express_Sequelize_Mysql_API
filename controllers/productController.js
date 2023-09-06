

const db = require ('../models')

//create main model

const Product= db.products
const Review = db.reviews

//main work

//1. create Product
const addProduct = async (req, res) => {
 
    console.log(req.body);
    let info = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };

    console.log(info)

    const product = await Product.create(info);
    res.send(200);
  } 


//2 get all products
const getAllProducts = async (req, res)=>{
    let products = await Product.findAll({})
    res.status(200).send(products)

}

//3. get single product

const getOneProduct = async (req, res)=>{
    let id = req.params.id
    const product = await Product.findOne({
        where : {id: id}
    })

    res.status(200).send(product)
}

//4. update product

const updateProduct = async (req, res)=>{
    let id = req.params.id
    const product = await Product.update(
        req.body, {where: {id: id}}
    )

    res.status(200).send(product)
}

//5. delete Product by id

const deleteProduct = async (req, res)=>{
    let id = req.params.id
   await Product.destory({
        where: {id:id}
   })
   res.status(200).send('product is deleted')
}

//6. get Published Product

const getPublishedProducts = async (req, res)=>{
    const products = await Product.findAll(
        {where: {published: true}}
    )
}

module.exports ={
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProducts
}