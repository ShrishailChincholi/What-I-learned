const express = require('express');
const { getproduct, getsingleproduct, createproduct, updateproduct, deleteproduct } = require('../controller/product.controller');
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