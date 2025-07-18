const Emprestimo = require('../models/Emprestimo');
const Livro = require('../models/Livro');

exports.listar = async (req, res) => {
  const emps = await Emprestimo.find()
    .populate('aluno')
    .populate('livro');
  res.json(emps);
};

exports.obter = async (req, res) => {
  const emp = await Emprestimo.findById(req.params.id)
    .populate('aluno')
    .populate('livro');
  if (!emp) return res.status(404).json({ msg: 'Empréstimo não encontrado' });
  res.json(emp);
};

exports.criar = async (req, res) => {
  const { aluno, livro, dataDevolucaoPrevista } = req.body;
  const emp = new Emprestimo({ aluno, livro, dataDevolucaoPrevista });
  await emp.save();
  await Livro.findByIdAndUpdate(livro, { disponivel: false });
  res.status(201).json(emp);
};

exports.devolver = async (req, res) => {
  const emp = await Emprestimo.findByIdAndUpdate(
    req.params.id,
    { status: 'devolvido' },
    { new: true }
  );
  if (!emp) return res.status(404).json({ msg: 'Empréstimo não encontrado' });
  await Livro.findByIdAndUpdate(emp.livro, { disponivel: true });
  res.json(emp);
};

exports.deletar = async (req, res) => {
  await Emprestimo.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Empréstimo excluído' });
};