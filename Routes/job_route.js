const express = require("express");
const { Job_Model } = require("../Models/job_model");
const Job_Route = express.Router();

//GET ALL JOBS
Job_Route.get("/", async (req, res) => {
    try {
        const data = await Job_Model.find();
        res.status(200).send(data);
    } catch (error) {
        res.send(500).send({ msg: error.message });
    }
})


//POST  JOBS 
Job_Route.post("/jobs", async (req, res) => {
    try {
        const data = new Job_Model(req.body)
        await data.save();
        res.send("Job Added successfully");
    } catch (error) {
        res.send(error.message)
    }
})

//UPDATE JOB BY ID
Job_Route.patch("/jobs/:id", async (req, res) =>{
    try {
        const jobID = req.params.id;
        const newData = req.body;
        const updatedProduct = await Job_Model.findByIdAndUpdate(jobID, newData);
        if (!updatedProduct) {
            return res.status(404).send("Job not found");
        }
        res.send("Job updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// DELETE Job
Job_Route.delete("/jobs/:id", async (req, res) => {
    try {
        const jobID = req.params.id;
        const deletedJob = await Job_Model.findByIdAndDelete(jobID);
        if (!deletedJob) {
            return res.status(404).send("Job not found");
        }
        res.send("Job deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// FOR THE ADMIN LOGIN
Job_Route.post("/admin", (req, res) => {
    // Predefined admin credentials
    const adminEmail = "ertaruntak@gmail.com";
    const adminPassword = "tarun.admin";

    // Get email and password from request body
    const { email, password } = req.body;

    // Check if email and password match the admin credentials
    if (email === adminEmail && password === adminPassword) {
        res.status(200).send("Login Success");
        
    } else {
        res.status(400).send("Unauthorized");
    }
});

module.exports = { Job_Route }