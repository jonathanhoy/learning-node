const express = require('express');
const router = express.Router();
const users = [];
var id = 1;

router.get('/users', (req, res) => {
  return res.json(users);
});

router.get('/users/:id', (req, res) => {
  const users = users.find(val => val.id === Number(req.params.id));
});

router.post('/users', (req, res) => {
  users.push({
    name: req.body.name,
    id: ++id
  });
  return res.json({ message: 'Created' });
});

router.patch('/users/:id', (req, res) => {
  const userIndex = users.findIndex(val => val.id === Number(req.params.id));
  users.splice(userIndex, 1);
  return res.json({ message: 'Deleted' });
});

module.exports = router;