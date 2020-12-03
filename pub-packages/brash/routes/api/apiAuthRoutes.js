const express           = require('express');
const router            = express.Router();

// From C:\Users\sparksb\WebStormProjects\udemy\mern-stack-ultimate-auth\metn-auth-api\routes\auth.js

// // import controller
// const {
//   signup,
//   accountActivation,
//   signin,
//   forgotPassword,
//   resetPassword,
//   googleLogin,
//   facebookLogin
// } = require('../controllers/auth');
//
// // import validators
// const {
//   userSignupValidator,
//   userSigninValidator,
//   forgotPasswordValidator,
//   resetPasswordValidator
// } = require('../validators/auth');
// const { runValidation } = require('../validators');
//
// router.post('/signup', userSignupValidator, runValidation, signup);
// router.post('/account-activation', accountActivation);
// router.post('/signin', userSigninValidator, runValidation, signin);
// // forgot reset password
// router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
// router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);
// // google and facebook
// router.post('/google-login', googleLogin);
// router.post('/facebook-login', facebookLogin);

module.exports = router;
