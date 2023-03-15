import jwt from "jsonwebtoken";
import createError from "../utils/createError";

export const verifyToken = (req,res,next) => {
    const token = req.cookies.accessToken;
    if(!token) return next(createError(401,"Your are not auntheticates here!"))

    jwt.verify(token,process.env.JWT_KEY,async(err,payload) => {
        if(err) return next(createError(403,"Token is not valid!"))
        req.userId = payload.id;
        next();
    });
};