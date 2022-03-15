const User = require('../models/user_model');


module.exports.profile = function(req,res){
    return res.render('profile',{
        title:"Profile"
    });
}
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"Sign In"
    });
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"Sign Up"
    })
}

module.exports.createUser = function(req,res){
    
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    else{
         User.findOne({email:req.body.email},
            function(err,user){
            if(err){
                console.log('Error in finding user while signing Up');
                return ;
            }
            if(!user){
                User.create(req.body,function(err){
                    if(err){
                        console.log('error while creating a user please try again');
                        return;
                    }
                    else{
                        console.log('User created successfully');
                        return res.redirect('/users/sign-in');
                    }
                })
            }
            else{
                console.log('User already exists');
                return res.redirect('/users/sign-in');
            }   
            });
    }

    


}