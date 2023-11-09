const CourseStatus = require("../../../models/courseStatus");

module.exports.updateStatus = async (req , res) => {
    const { userId ,courseId , status , lectureId } = req.body;
    // console.log(userId,"---->",courseId, "---->",status, "---->", lectureId);

    const user = await CourseStatus.findOne({userId});
   try {
       if(user){
           user.courses.forEach(async (ele)=>{
               if(ele.courseId === courseId){
                    // Find the index of the course in the courses array
                   const courseIndex = user.courses.findIndex(course => course.courseId === courseId);
   
                   // Add the new video object to the video array
                   user.courses[courseIndex].video.push({
                       videoId : lectureId,
                       viewed: true,
                   });
                   await user.save()
                   .then((response)=>res.send(response))
                   .catch(err=>console.log(err))
               }else{
                   const newCourse = {
                       courseId,
                       video : [
                           {
                               videoId : lectureId,
                               viewed : true
                           }
                       ]
                   }
                   user.courses.push(newCourse);
                   await user.save()
                   .then((response => res.send(response)))
                   .catch(err => console.log(err))
               }
           })
           // res.send("success ---> if")
       }else{
           const update = new CourseStatus({
               userId: userId, // Replace with a valid user ID
               courses: [
                   {
                       courseId: courseId,
                       video: [
                           {
                               videoId: lectureId,
                               viewed: true, // Example: Set to true if the video has been viewed
                           },
                       ]
                   },
               ],
           });
   
           update.save()
           .then((res)=>console.log("Status updated --->",res))
           .catch((err)=>console.log(err))
   
           // res.send("success--> else")
       }
   } catch (error) {
        res.status(500).json({ error: "Internal server error" });
   }
}
// module.exports = updateStatus;

module.exports.getStatus = async (req,res)=>{
    try {
        const { userId ,courseId } = req.body;
        console.log(userId,"---->",courseId);
    
        const user = await CourseStatus.findOne({userId});
        if(user){
            user.courses.forEach(ele=>{
                // console.log(ele)
                if(ele.courseId === courseId){
                    res.json({videoLength : ele.video.length})
                }
            })
        }else{
            res.json({videoLength : 0 })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
