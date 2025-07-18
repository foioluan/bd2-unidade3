const Aluno = require('../models/Aluno');

exports.listar = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

exports.obter = async (req, res) => {
  const aluno = await Aluno.findById(req.params.id);
  if (!aluno) return res.status(404).json({ msg: 'Aluno não encontrado' });
  res.json(aluno);
};

exports.criar = async (req, res) => {
  const aluno = new Aluno(req.body);
  await aluno.save();
  res.status(201).json(aluno);
};

exports.atualizar = async (req, res) => {
  const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!aluno) return res.status(404).json({ msg: 'Aluno não encontrado' });
  res.json(aluno);
};

exports.deletar = async (req, res) => {
  await Aluno.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Aluno excluído' });
};