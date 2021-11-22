const express = require('express');
const rolSchema = require('../model/rol');

const rolRouter = express.Router();

rolRouter.post('/roles/add', async (req, res) => {
    try {
        const rol = await rolSchema(req.body).save();    
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

rolRouter.get('/roles', async (req, res) => {
    try {
        const rol = await rolSchema.find();
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

rolRouter.get('/roles/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const rol = await rolSchema.findById(id);
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

rolRouter.delete('/roles/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const rol = await rolSchema.deleteOne({ _id: id });
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

rolRouter.put('/roles/update/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const rol = await rolSchema.updateOne({ _id: id }, req.body);
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
})

module.exports = rolRouter;