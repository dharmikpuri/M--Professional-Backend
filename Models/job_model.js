const mongoose = require("mongoose");

const Job_Schema = mongoose.Schema({
    image: { type: String, required: false },
    salary: { type: String, required: true },
    designation: { type: String, required: true },
    company: { type: String, required: true },
    skillsRequired: { type: String, required: true },
    jobLocation:{ type: String, required: true },
    lastDate:{type: String, required: true },
    jd:{type: String, required: true },
    eligiblity:{type:String,required:true}

}, { version_key: false })

const Job_Model = mongoose.model("mprofessional-job",Job_Schema)

module.exports = {Job_Model};


// "image":"https://sbi.co.in/o/SBI-Theme/images/custom/logo.png",
// "salary": "2 lakh",
// "designation": "PO",
// "company": "PNB",
// "skillsRequired": "NA",
// "jobLocation":"Goa",
// "lastDate":"12.03.2024",
// "jd":"NA",
// "eligiblity":"12th pass"