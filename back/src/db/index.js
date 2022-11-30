import DB_URI from '../config/env.json';
import mongoose from 'mongoose';

export const dbStart = async () => {
  try {
    await mongoose.connect(DB_URI.DB_URI);
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.log(error);
  }
};
