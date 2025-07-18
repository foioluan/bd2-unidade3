const { Schema, model } = require('mongoose');

const EmprestimoSchema = new Schema({
  aluno:                { type: Schema.Types.ObjectId, ref: 'Aluno', required: true },
  livro:                { type: Schema.Types.ObjectId, ref: 'Livro', required: true },
  dataSaida:            { type: Date, default: Date.now },
  dataDevolucaoPrevista:{ type: Date, required: true },
  status:               { type: String, enum: ['ativo','devolvido'], default: 'ativo' }
}, { timestamps: true });

module.exports = model('Emprestimo', EmprestimoSchema);