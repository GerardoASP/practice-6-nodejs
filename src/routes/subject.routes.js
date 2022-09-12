const express = require('express');
const { model } = require('mongoose');
const subject_model = require('../models/subject.model');
const subject_routes = express.Router()

subject_routes.get('/', (req, res)=>{
    subject_model.find()
        .then((data) => {res.json(data)})
        .catch((err) => res.json(err));
})
subject_routes.post('/course', (req, res)=>{
    const new_subject = subject_model(req.body);
    new_subject.save()
        .then((data) => {res.json(data)})
        .catch((err) => res.json(err))
})
subject_routes.get('/:courseId', (req, res)=>{})
subject_routes.put('/:courseId', (req, res)=>{})
subject_routes.delete('/:courseId', (req, res)=>{})

model.exports = subject_routes;