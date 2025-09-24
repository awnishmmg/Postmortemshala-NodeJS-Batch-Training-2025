const express = require('express');
const router = express.Router();

/**
 * @api {get} /users Get all users
 * @apiName GetUsers
 * @apiGroup Users
 * @apiSuccess {Object[]} users List of users.
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   [
 *     { "id": 1, "name": "Alice" },
 *     { "id": 2, "name": "Bob" }
 *   ]
 */
router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

/**
 * @api {post} /users Create a new user
 * @apiName CreateUser
 * @apiGroup Users
 * @apiParam {String} name User name
 * @apiSuccess {Object} user Created user object.
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 201 Created
 *   {
 *     "id": 3,
 *     "name": "Charlie"
 *   }
 */
router.post('/users', (req, res) => {
  const newUser = { id: 3, name: req.body.name };
  res.status(201).json(newUser);
});

module.exports = router;
