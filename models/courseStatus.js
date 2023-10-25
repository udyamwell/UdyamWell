const mongoose = require("mongoose");

const courseStatusSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    courses: [
        {
            courseId: String,
            video: [
                {
                    videoId: String,
                    viewed: {
                        type: Boolean,
                        default: false
                    }
                }
            ]
        }
    ],
});

const CourseStatus = mongoose.model('courseStatus', courseStatusSchema);

module.exports = CourseStatus;



    // course arr [
    //     video - [ {        course[0] ---> videos[n]
    //         video : ''
    //         viewed: ""
    //         basicdata: ""
    //     } ] 
    // lesson speicific data
    // ]

    // courses.map(data => courseSchema(data))
    // courses.forEach(course => {
    //     return {
    //     ...naya data , 
    //     bluePrintSchema(course)
    //     }
    // })        

    // function(){
    //     const finalresult = []
        
    //     forEach(){
    //     finalResult.push(data)
    //     }
    //     return finalresult
    //     }