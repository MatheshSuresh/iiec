import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODg0MmNlOTViOTc4NDA4NDcyYzZkYiIsImlhdCI6MTYxOTg4MTg5NSwiZXhwIjoxNjIyNDczODk1fQ.7E7ZIXNUIvgaOpLn70KzcMPBcUHs3deGK5HKLqllhB4