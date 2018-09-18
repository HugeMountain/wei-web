let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/user');
});
/* GET users listing. */
router.get('/user', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
