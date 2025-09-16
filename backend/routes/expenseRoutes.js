const express = require('express');
const router = express.Router();
const {
  getAllExpenses,
  addExpense,
  deleteExpense
} = require('../controller/expenseController');

router.get('/', getAllExpenses);
router.post('/', addExpense);
router.delete('/:id', deleteExpense);

module.exports = router;
