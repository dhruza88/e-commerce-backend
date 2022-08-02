const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products

// });

router.get('/',(req,res)=>{
  Category.findAll().then(data=>{
      res.json(data)
  }).catch(err=>{
      res.status(500).json({msg:"whoops,my bad!",err})
  })
});

router.get("/:id",(req,res)=>{
  Category.findByPk(req.params.id,{
      include:[{
          model:Product
      }]
  }).then(data=>{
      res.json(data)
  }).catch(err=>{
      res.status(500).json({msg:"whoops,my bad!",err})
  })
});

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products

// });

router.post("/",(req,res)=>{
  Category.create({
      category_name:req.body.category_name
  }).then(data=>{
      res.json(data)
  }).catch(err=>{
      res.status(500).json({msg:"whoops,my bad!",err})
  })
});

// router.post('/', (req, res) => {
//   // create a new category

// });

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {category_name: req.body.category_name},
    {where: req.params.bookId}

  ).then(data=>{
      res.json(data)
  }).catch(err=>{
      res.status(500).json({msg:"whoops,my bad!",err})

  })
});

router.delete("/:id",(req,res)=>{
  Category.destroy({
      where:{
          id:req.params.id
      }
  }).then(data=>{
      res.json(data)
  }).catch(err=>{
      res.status(500).json({msg:"whoops,my bad!",err})
  })
});

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
// });

module.exports = router;
