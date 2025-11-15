const product = require("../models/product");

// geting all product API
const getproduct = async (req, res) => {
    try {
        const producte = await product.find({});
        res.status(200).json(producte);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a single Product by ID
const getsingleproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const search = await product.findById(id);

        if (!search) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(search);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Erron in get user id !!")
    }
}

//  Create Product 
const createproduct = async (req, res) => {
    try {
        const Products = await product.create(req.body)
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Erron in get user put Api !!")
    }
}

// Update the Product by ID
const updateproduct = async (req, res) => {
    try {
        const { id } = req.params;

        const update = await product.findByIdAndUpdate(id, req.body);
        if (!update) {
            return res.status(404).json({ message: error.message })
        }

        const newpudate = await product.findById(id)
        res.status(200).json(newpudate);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Erron in get user update Api !!")
    }
}

// Update the DeleteProduct by ID
const deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const dele = await product.findByIdAndDelete(id);
        if (!dele) {
            return res.status(404).json({ message: error.message });
        }
        res.status(200).json({ message: "Product deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Erron in get user delete Api !!")
    }
}

module.exports = { getproduct, getsingleproduct, createproduct, updateproduct, deleteproduct }