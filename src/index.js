const express = require("express");
const { PORT } = require("./configs/server-config.js");
const connectDB = require("./configs/db-config.js");
const userRoutes = require("./routes/user-routes.js");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());


app.use("/api/users", userRoutes);  // /api/users/

app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);
    connectDB();
})
