'use strict'

import mongoose from 'mongoose'

const Task = mongoose.model('Tasks')

exports.listAllTasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err)
    res.json(task)
  })
}

exports.createTask = function(req, res) {
  console.log(req)  
  var newTask = new Task(req.body)
  newTask.save(function(err, task) {
    if (err)
      res.send(err)
    res.json(task)
  })
}

exports.readTask = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err)
    res.json(task)
  })
}

exports.updateTask = function(req, res) {
  Task.findOneAndUpdate({id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err)
    res.json(task)
  })
}

exports.deleteTask = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err)
    res.json({ message: 'Task successfully deleted' })
  })
}

