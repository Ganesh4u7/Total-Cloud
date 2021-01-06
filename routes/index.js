const router = require('express').Router();

const get_classes = require("../controllers/get_classes");
const get_teachers = require("../controllers/get_teachers");
const get_teachers_old_schedule = require('../controllers/get_old_teachers');


router.get('/get_classes',get_classes);
router.get('/get_teachers',get_teachers);
router.get('/get_teachers_old_schedule',get_teachers_old_schedule)


module.exports = router;