const router = require('express').Router();
const controller = require('../controllers/LivroController');

router.get('/', controller.listar);
router.get('/:id', controller.obter);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

module.exports = router;