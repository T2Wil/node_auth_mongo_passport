const express = require("express");
const usersRoutes = require("./routes/user");
const mongoose = require("mongoose");
const passport = require('./config/passport');
const session = require('express-session')
const PORT = process.env.PORT || 3000;
const app = express();

mongoose
.connect("mongodb://localhost/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    // insert admin
    require('./seeds/admin');
    app.use(express.json());


    //enable express session
    app.use(session({
      secret: 'secret',
    }))
    //passport 
    app.use(passport.initialize());
    app.use(passport.session());

    
    app.use("/api", usersRoutes);
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log('error: ', error));
