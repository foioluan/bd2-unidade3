require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

// Conecta ao MongoDB
connectDB();

// Rotas
app.use('/api/alunos', require('./routes/alunos'));
app.use('/api/livros', require('./routes/livros'));
app.use('/api/emprestimos', require('./routes/emprestimos'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));