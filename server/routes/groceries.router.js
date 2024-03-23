const express = require('express');
const groceryRouter = express.Router();
const pool = require('../modules/pool.js');

// GET
groceryRouter.get('/')

// POST
groceryRouter.post('/')

// PUT
groceryRouter.put('/:id')

// DELETE
groceryRouter.delete('/:id')

// RESET (PUT change purchase status)
groceryRouter.put()

// CLEAR (DELETE all)
groceryRouter.delete('/')


module.exports = groceryRouter;