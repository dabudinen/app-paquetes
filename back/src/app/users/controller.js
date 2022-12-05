import Users from './schema';
import * as argon2 from 'argon2';
import { sign, verify } from 'jsonwebtoken';
import {} from 'dotenv/config';

// registro de usuarios
export const addUser = async (req, res) => {
  console.log('solictud de registro de usuario');
  const data = req.body;
  if (!data.firstName || !data.password || !data.email || !data.documentId) {
    return res.status(400).json({
      message: 'Debes rellenar todos los campos',
    });
  }
  const checkID = await Users.find({ firstName: data.documentId });
  const checkEmail = await Users.find({ email: data.email });
  console.log(checkID.length);
  if (checkID.length || checkEmail.length) {
    return res
      .status(400)
      .json({ message: 'El ID o email ya existe en nuestra DB' });
  }
  try {
    const hash = await argon2.hash(req.body.password);
    const addUser = new Users({
      firstName: data.firstName,
      lastName: data.lastName,
      documentId: data.documentId,
      email: data.email,
      password: hash,
    });
    await addUser.save();
    return res.status(200).json({ message: 'usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'error al crear usuario' });
  }
  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log('IP visitante ' + ipaddress);
};

export const userLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await Users.findOne({ email }).select(
    'password firstName documentId id'
  );

  if (!user) {
    res.json({
      message: 'datos inválidos, verifica tu usuario y/o clave',
    });
    return null;
  } else {
    if (await argon2.verify(user.password, password)) {
      const token = sign(
        { id: user.id, document: user.documentId, name: user.firstName },
        process.env.SECRET,
        {
          expiresIn: process.env.TOCKEN_EXPIRES,
        }
      );
      return res
        .cookie(process.env.ACCESS_TOKEN, token, {
          maxAge: process.env.COOKIE_EXPIRES,
          httpOnly: true,
          secure: false,
          sameSite: 'lax',
        })
        .status(200)
        .json({
          message: `Has ingresado como ${user.firstName}`,
          estatus: 'ok',
        });
    } else {
      res.json({
        message: 'datos inválidos, verifica tu usuario y/o clave',
      });
    }
  }

  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log('IP visitante ' + ipaddress);
};

export const delUser = (req, res) => {
  // solo el mismo usuario puede darse de baja
  // si el id es igual al id, entonces puede borrar sus datos
  res.json('MyVariable');
};
// Funcion sin completar
// const auth = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     return res.sendStatus(403);
//   }
//   try {
//     const data = jwt.verify(token, 'MITOKKKKK');
//     req.userId = data.id;
//     req.userRole = data.role;
//     return next();
//   } catch {
//     return res.sendStatus(403);
//   }
// };
/*
const token = sign({"d":"dd"}, "secret", {expiresIn: 300})
console.log(token);
const verifycode = verify(token, "secret");
console.log(verifycode);
*/

export const authUser = (req, res, next) => {
  const token = req.cookies[process.env.ACCESS_TOKEN];
  if (token) {
    try {
      const data = verify(token, process.env.SECRET);
      console.log(data);
      req.name = data.name;
      return res.json({ status: 'ok', name: req.name, id: data.id });
    } catch {
      console.log('error');
    }
  }
  return next();
};

export const closeSession = (req, res, next) => {
  res.clearCookie();
  res.cookie(process.env.ACCESS_TOKEN, '', {
    maxAge: -86400000, // yesterday
  });
  res.send({ message: 'Los datos de su sesion han sido borrados' });
  return next();
};
