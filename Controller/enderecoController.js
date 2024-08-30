const { json } = require('sequelize');
const { Endereco } = require ('../models/endereco')

// Criação de um novo endereço 
const createEndereco = async (req, res) => {
    try {
        const { Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipoIBGE } = req.body;
        const novoEndereco = await Endereco.create ({
            Cep,
            Logradouro,
            Numero,
            Complemento,
            Bairro,
            Cidade,
            Estado,
            MunicipoIBGE,
        });

        res.status(201).json(novoEndereco);
    } catch (erro){
        res.status(500).json({error: 'Erro ao criar endereço', details : error.message})
    }
};

// leitura de todos os endereços
const getAllEndereco = async (req, res) => {
    try {
        const endereco = await Endereco.findAll();
        res.status(200).json(endereco);
    }   catch (error) {
        res.status(500).json ({error: 'Erro ao buscar endereços', details: error.message});
    }
};

//Leitura de um endereço por ID
const getEnderecoById = async (req, res) => {
    try {
        const { Id} = req.params;
        const endereco = await Endereco.findOne({ where: { id: Id } });

        if (!endereco) {
            return res.status(404).json({error: 'Endereço não encotrado'});
        }

        res.status(200).json(endereco);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar endereço', details: error.message});
    }
};

const updateEndereco = async (req, res) => {
    try {
        const { Id} = req.params;
        const { Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipoIBGE } = req.body; 

        const endereco = await Endereco.FindByPk(Id);

        if (!endereco) {
            return res.status(404).json({ error: 'Endereço não encotrado'});
        }

        endereco.Cep = Cep;
        endereco.Logradouro = Logradouro;
        endereco.Numero = Numero;
        endereco.Complemento = Complemento;
        endereco.Bairro = Bairro;
        endereco.Cidade = Cidade;
        endereco.Estado = Estado;
        endereco.MunicipoIBGE = MunicipoIBGE;

        await endereco.save();

        res.status(200).json(endereco);
    } catch (erorr){
        res.status(500).json({ error: 'Erro ao atualizar endereço', details: error.message });
    }
};

// Exclusão de um endreço 
const deleteEndereco = async (req, res) => {
    try {
        const {Id} = req.params;

        const endereco = await Endereco.findOne({ where: { id: Id } });

        if (!endereco) {
            return res.status(404).json({error: 'Endereço não encontrado'});
        }

        await endereco.destroy();

        res.status(204).send(); // Sem conteudo, pois foi deletado com sucesso 
    } catch (error) {
        res.status(500).json({error: 'Erro ao deletar endereço', details: error.message});
    }
};

module.exports = {
    deleteEndereco,
    updateEndereco,
    getAllEndereco,
    getEnderecoById,
    createEndereco
}