const router = require('express').Router();
const ctrl = require('../controllers/EmprestimoController');

router.get('/', ctrl.listar);
router.get('/:id', ctrl.obter);
router.post('/', ctrl.criar);
router.patch('/:id/devolver', ctrl.devolver);
router.delete('/:id', ctrl.deletar);

module.exports = router;