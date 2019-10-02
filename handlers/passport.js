const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// get create strategy from user model passport plugin
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

