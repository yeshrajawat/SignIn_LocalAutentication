const  passport = require('passport');
const User = require('../models/user_model');
const Localstategy = require('passport-local').Strategy;

passport.use(new Localstategy({usernameField:'email'
        },
        function(email,password,done){
            User.findOne({email:email},function(err,user){
                if(err){
                    console.log('Error while finding the user in database');
                    return done(err);
                }
                else if(!user || password != user.password){
                    console.log('Invalid Username/Password')
                    return done(null,false);
                }
                else{
                    return done(null,user);
                }
                
            })
})

);

passport.serializeUser(function(user,done){
    return done(null,user.id);
})
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in deserializing the user');
            return done(err);
        }
        else{
            return done(null,user);
                }
    })
}
);

module.exports.checkAuthenticated = function(req,res,next){
    if(req.isAuthenticated){
        return next();
    }
    else{
        return res.redirect('/users/sign-in');
    }
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated){
        res.locals.user = req.user;
    }
    next();
}