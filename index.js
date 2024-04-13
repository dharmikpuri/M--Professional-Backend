const express = require("express");
const cors = require("cors");
const { Connection } = require("./Config/db");
const { Job_Route } = require("./Routes/job_route");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/",Job_Route)
const PORT = process.env.PORT || 8081

app.listen(PORT, async () => {
    try {
        await Connection
        console.log("Connection Established Succesfully", PORT)

    } catch (error) {
        console.log(error.message);

    }
})