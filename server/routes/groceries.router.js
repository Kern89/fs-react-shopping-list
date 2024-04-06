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
    const listItem = req.body
    const sqlText = `
        INSERT INTO "groceryList" ("name", "displayImage", "unit", "quantity")
        VALUES ($1, $2, $3, $4);
    `;
    pool.query(sqlText, [listItem.name, listItem.displayImage, listItem.unit, listItem.quantity])
        .then((result) => {
            console.log('Added into groceryList:', listItem.name);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error making database query ${sqlText}`);
            res.sendStatus(500);
        })
});

// PUT
groceryRouter.put('/:id', (req, res) => {
    const sqlText = `
        UPDATE "groceryList" SET "purchased" = NOT "purchased"
        WHERE "id" = $1;
    `;
    pool.query (sqlText, [req.params.id])
        .then((result) => {
            console.log('Updated to purchased:', req.params.name);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error in making database query ${sqlText}:`, error);
            res.sendStatus(500);
        })
});

// DELETE
groceryRouter.delete('/:id', (req, res) => {
    console.log('req.params', req.params);
    let queryText = `DELETE FROM "groceryList" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// RESET (PUT change purchase status)
groceryRouter.put('/reset/:id', (req, res) => {
    const sqlText = `
        UPDATE "groceryList" SET "purchased" = false;
    `;
    pool.query (sqlText)
        .then((result) => {
            console.log('Updated to purchased:', req.params.name);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error in making database query ${sqlText}:`, error);
            res.sendStatus(500);
        })
});

// CLEAR (DELETE all)
groceryRouter.delete('/', (req, res) => {
    console.log('req.params', req.params);
    let queryText = `DELETE FROM "groceryList";`
    pool.query(queryText, [req.params.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});


module.exports = groceryRouter;