const router = require('express').Router();
const questionRoutes = require('../question/questionRoutes');

router.use('/question', questionRoutes);

module.exports = router;
