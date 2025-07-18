const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.database_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Erro ao conectar MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;