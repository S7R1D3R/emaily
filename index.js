const express = require("express"),
      app     = express(),
      authRoutes = require("./routes/authRoutes"),
      keys = require("./config/keys"),
      mongoose = require("mongoose");

      // Models
      require("./models/User");         // User

      // Google OAuth Configuration
      require("./services/passport");

      // Authentication Routes
      require("./routes/authRoutes")(app);

      // Connect to Database
      mongoose.connect(keys.mongoURI);


app.listen(3000, () => console.log("Server started..."));