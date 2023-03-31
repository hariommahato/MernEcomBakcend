const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");
const cors = require("cors");
//config
dotenv.config({ path: "./config/config.env" });
app.use(cookieParser());
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.use(cors({
    origin:"https://mern-ecommerce-frontend.onrender.com"
}));
app.use(fileUpload());
const product = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
const category=require('./routes/categoryRoute')
const carousel=require('./routes/carouselRoute')
app.use("/api/v1", product);
app.use("/api/v1", userRouter);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1",category)
app.use('/api/v1',carousel)
app.use(errorMiddleware);

module.exports = app;
