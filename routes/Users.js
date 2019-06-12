const express = require('express');
const user = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var banco = require(`../client/src/app-banco`);

user.use(cors());

process.env.SECRET_KEY = 'secret';

user.post(`/registrarPC`, (req, res) => {
    let { gabinete, software, processador, placaDeVideo, cooler, placaMae, memoria, hd} = req.body;
    registrarPC(gabinete, software, processador, placaDeVideo, cooler, placaMae, memoria, hd);
});

user.post(`/registrarUsuario`, (req, res) => {
    let { nome,sobrenome,dataNasc,celular,email,senha } = req.body;
    registrarUsuario(nome,sobrenome,dataNasc,celular,email,senha);
});

function registrarPC(gabinete, software, processador, placaDeVideo, cooler, placaMae, memoria, hd) {
    console.log(gabinete, software, processador, placaDeVideo, cooler, placaMae, memoria, hd);
    banco.conectar().then(() => {
        console.log('PC registrado com sucesso!');
        return banco.sql.query(`INSERT INTO PC values 
        ('${gabinete}','${software}','${processador}','${placaDeVideo}','${cooler}','${placaMae}',
            '${memoria}','${hd}');`);
    }).catch(err => {
        var erro = `Erro ao tentar registrar aquisição na base: ${err}`;
        console.error(erro);
    }).finally(() => {
        banco.sql.close();
    });
}

function registrarUsuario(nome,sobrenome,dataNasc,celular,email,senha) {
    console.log(nome,sobrenome,dataNasc,celular,email,senha);
    banco.conectar().then(() => {
        console.log('Usuário registrado com sucesso!');
        return banco.sql.query(`INSERT INTO Usuario values 
        ('${nome}','${sobrenome}','${dataNasc}','${celular}','${email}','${senha}');`);
    }).catch(err => {
        var erro = `Erro ao tentar registrar aquisição na base: ${err}`;
        console.error(erro);
    }).finally(() => {
        banco.sql.close();
    });
}

module.exports = user;