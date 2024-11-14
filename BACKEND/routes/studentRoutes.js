const express = require('express');
const { createStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController');
const router = express.Router();

router.post('/students', createStudent);
router.get('/students', getStudents);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

module.exports = router;