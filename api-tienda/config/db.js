const mongoose = require('mongoose');

// Reemplaza la URI por la de tu cluster de MongoDB Atlas o local
const uri = 'mongodb+srv://afmaldonado10:Andres1070.@cluster0.9swl2u0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('✅ Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error de conexión:', err);
    process.exit(1);
  }
};

module.exports = connectDB;