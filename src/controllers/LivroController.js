const Livro = require('../models/Livro');

exports.listar = async (req, res) => {
  const livros = await Livro.find();
  res.json(livros);
};

exports.obter = async (req, res) => {
  const livro = await Livro.findById(req.params.id);
  if (!livro) return res.status(404).json({ msg: 'Livro não encontrado' });
  res.json(livro);
};

exports.criar = async (req, res) => {
  const livro = new Livro(req.body);
  await livro.save();
  res.status(201).json(livro);
};

exports.atualizar = async (req, res) => {
  const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!livro) return res.status(404).json({ msg: 'Livro não encontrado' });
  res.json(livro);
};

exports.deletar = async (req, res) => {
  await Livro.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Livro excluído' });
};