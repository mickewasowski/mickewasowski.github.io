const express = require('express');

const router = express.Router();

const home = async (req, res) => {

   res.render('index');
};

const about = (req, res) => {
   res.render('about/about');
};

const contactme = (req, res) => {
   res.render('contactme/contactme');
};

const thankyou = (req, res) => {
   res.render('thankyou/thankyou');
};

router.get('/', home);
router.get('/about', about);
router.get('/contactme', contactme);
router.get('/thankyou', thankyou);

module.exports = router;