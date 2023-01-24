import express from 'express' ;

const router = express.Router() ;
const schoolData = [] ;
const studentData = [] ;
let numberOfSchools = 0 ;

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

    return res.status(200).json({message:"Student added", school}) ;
})

router.post("/addStudent", (req, res) => {
    const {name, schoolId, eventName} = req.body ;
    const school = schoolData.filter(school => school.id != schoolId) 
    const student = {
        name : name,
        school : school.name
    }
})

export default router ;