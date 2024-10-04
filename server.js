const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const dbUrl = require('./config/constants').dbUrl;
const secretKey = require('./config/constants').secret;

const userRouter = require('./routes/auth');
const productRouter = require('./routes/admin/productupload');
const app = express();
const port = process.env.PORT||5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());
app.use(session({
  secret:secretKey,
  resave:false,
  saveUninitialized:true,
  cookie:{secure:false}

}));

mongoose
  .connect(dbUrl)
  .then(()=> {
    console.log('mongodb connect succesfully');
  })
  .catch((error)=>console.log(error));

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.listen(port, ()=>{
  console.log(`server is running on ${port}`);
});
