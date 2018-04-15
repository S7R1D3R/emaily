const express = require("express"),
      cookieSession = require("cookie-session"),
      passport = require("passport"),
      keys = require("./config/keys"),
      mongoose = require("mongoose");

// Models
require("./models/User");         // User

// Google OAuth Configuration
require("./services/passport");

// Connect to Database
mongoose.connect(keys.mongoURI);

const app = express();

// Enable Cookie Sessions
app.use(
    cookieSession({

      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Authentication Routes
require("./routes/authRoutes")(app);

app.listen(5000, () => console.log("Server started..."));