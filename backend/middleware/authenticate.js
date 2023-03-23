const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: "No token provided" });
    }
    try {
      let decoded = jwt.verify(token, "pococare");
      next()
    } catch (err) {
      return res.status(401).send({ message: "Invalid token" });
    }
}

module.exports={
    authenticate
}