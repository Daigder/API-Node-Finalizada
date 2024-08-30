const express = require ('express');
const enderecoController = require ('../Controller/enderecoController');

const router = express.Router();

router.post('api/enderecos', enderecoController.createEndereco);
router.get('/enderecos', enderecoController.getAllEndereco);
router.get('/enderecos/:Id',enderecoController.getEnderecoById);
router.put('/enderecos/:Id', enderecoController.updateEndereco);
router.delete('/enderecos/:Id', enderecoController.deleteEndereco);

module.exports = router;