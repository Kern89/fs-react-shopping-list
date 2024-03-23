const express = require('express');
const groceryRouter = express.Router();
const pool = require('../modules/pool.js');

// GET
groceryRouter.get('/', (req, res) => {
    const sqlText = `
        SELECT * FROM "groceryList"
        ORDER BY id;
    `;
    pool
        .query(sqlText)
        .then((result) => {
            console.log(`In GET (${sqlText})`);
            res.status(200).send(result.rows);
        })
        .catch((error) => {
            console.error(error);
            alert(`ERROR in GET (${sqlText})`, error);
            res.sendStatus(500);
        });
});

// POST
groceryRouter.post('/', (req, res) => {

});

// PUT
groceryRouter.put('/:id', (req, res) => {

});

// DELETE
groceryRouter.delete('/:id', (req, res) => {

});

// RESET (PUT change purchase status)
groceryRouter.put()

// CLEAR (DELETE all)
groceryRouter.delete('/', (req, res) => {

});


module.exports = groceryRouter;