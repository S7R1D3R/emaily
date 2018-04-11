const express = require("express"),
      app     = express(),
      authRoutes = require("./routes/authRoutes");

                require("./services/passport");
                require("./routes/authRoutes")(app);


app.listen(3000, () => console.log("Server started..."));