const express = require('express');
const port = 8000;
const app = express();
const route_dir = require('./routers/index_router');
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts') 



//

app.use(express.urlencoded());
// Adding Middleware for express-ejs-layouts
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout head
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


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

