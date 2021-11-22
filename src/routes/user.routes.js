const express = require('express');
const userSchema = require('../model/user');

const userRouter = express.Router();

userRouter.post('/users/add', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

userRouter.get('/users', (req, res) => {
    userSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

userRouter.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

userRouter.delete('/users/delete/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

userRouter.put('/users/update/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, email, password } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { firstName, lastName, age, email, password } })
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

module.exports = userRouter;