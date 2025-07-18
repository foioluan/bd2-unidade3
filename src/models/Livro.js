const { Schema, model } = require('mongoose');

const LivroSchema = new Schema({
  titulo:     { type: String, required: true },
  autor:      { type: String, required: true },
  isbn:       { type: String, unique: true },
  disponivel: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = model('Livro', LivroSchema);