import axios from 'axios';

export const registrarUsuario = (newUser)=>{
    return axios
    .post('user/registrarUsuario',{
        nome:newUser.nome,
        sobrenome:newUser.sobrenome,
        dataNasc:newUser.dataNasc,
        celular:newUser.celular,
        email:newUser.email,
        senha:newUser.senha
    })
    .then(res=>{
        console.log("Registrado de Registro.js");
    })
}

export const login = user =>{
    return axios
    .post('user/login',{
        email:user.email,
        password: user.password
    })
    .then(res=>{
        localStorage.setItem('usertoken',res.data);
        return res.data;
    })
    .catch(err=>{
        console.log(err);
    })
}