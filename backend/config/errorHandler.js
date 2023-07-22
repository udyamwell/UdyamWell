const errorHandler=(error,req,res,next)=>{
    console.log("errrrr",error)
    let errStatus= error?.status || 500;
    let errMessage= error?.message || "something went wrong";
    console.log("staaa",errStatus);
    console.log("message",errMessage);
    return  res.status(errStatus).send({message: errMessage});
};

module.exports = errorHandler ;