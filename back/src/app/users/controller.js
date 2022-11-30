import Users from './schema';
import * as argon2 from 'argon2';
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

// ok
export const addUser = async (req, res) => {
  const data = req.body;
  if (
    !data ||
    !data.username ||
    !data.password ||
    !data.email ||
    !data.documentId
  ) {
    return res.status(400).json({ message: 'Debes rellenar todos los campos' });
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
    console.log(addUser);
    res.json({ message: 'usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'error al crear usuario' });
  }
  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log('IP visitante ' + ipaddress);
};

export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await Users.findOne({ email }).select('password');
  if (!user) {
    res.json({
      message: 'datos inválidos, verifica tu usuario y/o clave',
    });
    return null;
  } else {
    try {
      if (await argon2.verify(user.password, password)) {
        res.send('Todo cool' + user);
      } else {
        res.json({
          message: 'datos inválidos, verifica tu usuario y/o clave',
        });
      }
    } catch (err) {
      // internal failure
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
const auth = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, 'MITOKKKKK');
    req.userId = data.id;
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

export const updateUser = (req, res) => {
  res.json('MyVariable');
};
export const createCookie = (req, res) => {
  res.cookie(`cookie_session`, 'cookieval', {
    maxAge: 604800000, // 7 days
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
  });
  res.send('MyVariable');
};

export const deleteCookie = (req, res) => {
  res.clearCookie();
  res.cookie(`cookie_session`, 'cookieval', {
    maxAge: -86400000, // yesterday
  });
  res.send({ message: 'Los datos de su sesion han sido borrados' });
};
/*
const token = sign({"d":"dd"}, "secret", {expiresIn: 300})
console.log(token);
const verifycode = verify(token, "secret");
console.log(verifycode);
*/
