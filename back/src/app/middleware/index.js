import {} from 'dotenv/config';
import { verify } from 'jsonwebtoken';

export const allowHeaderResponse = (req, res, next) => {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'
  );
  next();
};

export const authorization = (req, res, next) => {
  const token = req.cookies[process.env.ACCESS_TOKEN];
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = verify(token, process.env.SECRET);
    req.userId = data.id;
    req.userRole = data.role;
  } catch {
    return res.sendStatus(403);
  }
  next();
};
