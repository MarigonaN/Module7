const express = require('express')
const studentModel = require('./schema')
const qToM = require('query-to-mongo')

const studentsRouter = express.Router()


studentsRouter.get('/', async (req, res, next) => {
    const parsedQuery = qToM(req.query)
    console.log(parsedQuery)
    try {
        const studentsList = await studentModel.find(
            parsedQuery.criteria,
            parsedQuery.options.fields
        )
        .sort(parsedQuery.options.sort)
        .skip(parsedQuery.options.skip)
        .limit(parsedQuery.options.limit)
      
        res.send(studentsList)
    } catch (error) {
        next(error)
    }
})




studentsRouter.get('/:id', async (req, res, next) => {
    try {
        const student = await studentModel.findById(req.params.id)
        console.log(student)
        if (student) {
            res.send(student)
        } else {
            const error = new Error()
            error.httpStatusCode = 404
            next(error)
        }

    } catch (error) {
        next(error)
    }
})




studentsRouter.post('/', async (req, res, next) => {
    try {
        const newStudent = new studentModel(req.body)
        const response = await newStudent.save()
        res.send(response)
    } catch (error) {
        next(error)
    }
})




studentsRouter.put('/:id', async (req, res, next) => {
    try {
        const response = await studentModel.findByIdAndUpdate(req.params.id, req.body)
        console.log(response)
        res.send(response)
    } catch (error) {
        next(error)
    }
})




studentsRouter.delete('/:id', async (req, res, next) => {
    try {
        await studentModel.findByIdAndDelete(req.params.id)

        res.send("deleted!")
    } catch (error) {
        next(error)
    }
})

module.exports = studentsRouter