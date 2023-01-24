import express from 'express' ;
import axios from 'axios' ;

const router = express.Router() ;
const schoolData = [] ;
const studentData = [] ;
let numberOfSchools = 0 ;
const addStudentsEvent = "addStudent" ;

router.post("/", (req, res) => {
    const {name, eventName, eventUrl} = req.body ;
    const school = {
        name : name,
        id : numberOfSchools + 1,
        webhookDetails: {
            eventName : eventName,
            eventUrl : eventUrl
        }
    }
    schoolData.push(school) ;
    numberOfSchools = numberOfSchools + 1 ;

    return res.status(200).json({message:"Student added", school}) ;
})

router.post("/addStudent", async(req, res) => {
    const {name, schoolId} = req.body ;
    const school = schoolData[0] ;
    const student = {
        name : name,
        school : school.name
    }
    if(school.webhookDetails.eventName == 'addStudent'){
        const response = await axios.post(school.webhookDetails.eventUrl, {studentName : student.name}) ;
        console.log(response.data) ;
        return res.status(200).json(response.data) ;
    }

    return res.status(400).json("error") ;

})

export default router ;