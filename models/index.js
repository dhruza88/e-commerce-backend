// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category);
// Categories have many Products
 Categories.hasMany(Products,{
  onDelete:'CASCADE'
});
// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, { 
  foreighKey: 'ProductTag',
  onDelete: 'CASCADE',
 });

// Tags belongToMany Products (through ProductTag)
Tags.belongToMany(Products, {
  foreignKey: 'ProductTag',
  onDelete: 'CASCADE',
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
