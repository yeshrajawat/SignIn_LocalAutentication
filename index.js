const express = require('express');
const port = 8000;
const app = express();
const route_dir = require('./routers/index_router');

//Setting router mvc routers
app.use('/',route_dir);

//Using asset folder to acess css js images in ejs
app.use(express.static('./assets'));

//Set view engine as ejs 
app.set('view engine','ejs');
app.set('views','./views');


//Listening to the port 
app.listen(port,function(err){
    if(err){
        console.log('Error occured while listening to the port:',port);
        return ;
    }
    console.log('Server is up and running on port: ',port);
    return ;
})

