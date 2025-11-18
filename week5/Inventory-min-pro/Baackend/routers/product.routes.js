const express = require('express');
const { getsingleproduct, createproduct, updateproduct, deleteproduct, getproduct } = require('../controllers/product.controllers');
const router = express.Router();

router.get('/',getproduct);
router.get('/:id',getsingleproduct);

// create product
router.post('/',createproduct);

// Update product
router.put('/:id',updateproduct);

// delete Product
router.delete('/:id',deleteproduct)


module.exports = router;