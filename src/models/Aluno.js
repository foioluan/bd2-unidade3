const { Schema, model } = require('mongoose');

const AlunoSchema = new Schema({
  nome:      { type: String, required: true },
  matricula: { type: String, required: true, unique: true },
  email:     { type: String, required: true, unique: true },
  turma:     { type: String }
}, { timestamps: true });

module.exports = model('Aluno', AlunoSchema);