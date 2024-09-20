import jwt from "jsonwebtoken";

/////

const authUser = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Auth failed" });
    }

    const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = decodedInfo.userId;
    // req.user = decodedInfo;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Auth failed" });
  }
};

export default authUser;

// const authUser = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//       return res.status(401).json({ message: "Auth failed" });
//     }

//   const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);

//   if (!decodedInfo) {
//       return res.status(401).json({ message: "Auth failed" });
//   }

//   req.body.userId = decodedInfo.userId;

//   return next();

// };

// export default authUser;
