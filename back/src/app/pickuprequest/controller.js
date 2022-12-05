import Package from './schema';
import { verify } from 'jsonwebtoken';

export const addPackage = async (req, res) => {
  const data = req.body;

  try {
    const addPackage = new Package({
      sender: data.sender,
      width: data.width,
      height: data.height,
      depth: data.depth,
      pickupDate: data.pickupDate,
      fromCity: data.fromCity,
      fromAddress: data.fromAddress,
      toCity: data.toCity,
      toAddress: data.toAddress,
      toRecipient: data.toRecipientId,
      toRecipientPhone: data.toRecipientId,
      toRecipientId: data.toRecipientId,
    });
    await addPackage.save();

    res.json({ message: 'Sus datos han sido registrados' });
  } catch (error) {
    res.status(500).json({ message: 'error al crear paquete' });
    console.error({ 'Error al crear paquete': error });
  }
  // const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  // console.log('IP visitante ' + ipaddress);
};

export const getAllPkg = async (req, res) => {
  const token = req.cookies[process.env.ACCESS_TOKEN];
  if (token) {
    try {
      const data = verify(token, process.env.SECRET);
      console.log(data);
      const paquetes = await Package.find({ sender: data.id });
      console.log(paquetes);
      res.json(paquetes);
    } catch (error) {
      res.status(500).json({
        message: 'Algo fallo al consultar el listado de paquetes',
      });
    }
  }
};

export const editAllPkg = async (req, res) => {
  await Package.find({ sender: '' });
};
