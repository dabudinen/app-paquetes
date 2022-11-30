import Package from './schema';

export const addPackage = async (req, res) => {
  if (
    !req.body ||
    !req.body.sender ||
    !req.body.width ||
    !req.body.height ||
    !req.body.depth ||
    !req.body.weight ||
    !req.body.pickupDate ||
    !req.body.fromCity ||
    !req.body.fromAddress ||
    !req.body.toCity ||
    !req.body.toAddress ||
    !req.body.toRecipient ||
    !req.body.toRecipientPhone ||
    !req.body.toRecipientId
  ) {
    return res.status(400).json({ message: 'Debes rellenar todos los campos' });
  }
  try {
    const addPackage = new Package({
      sender: req.body.sender,
      width: req.body.width,
      height: req.body.height,
      depth: req.body.depth,
      pickupDate: req.body.pickupDate,
      fromCity: req.body.fromCity,
      fromAddress: req.body.fromAddress,
      toCity: req.body.toCity,
      toAddress: req.body.toAddress,
      toRecipient: req.body.toRecipientId,
      toRecipientPhone: req.body.toRecipientId,
      toRecipientId: req.body.toRecipientId,
    });
    await addPackage.save();

    res.json({ message: 'Sus datos han sido registrados' });
  } catch (error) {
    res.status(500).json({ message: 'error al crear usuario' });
  }
  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log('IP visitante ' + ipaddress);
};
export const getAllPkg = async (req, res) => {
  await Package.find({ sender: '' });
};
export const editAllPkg = async (req, res) => {
  await Package.find({ sender: '' });
};