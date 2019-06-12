import axios from 'axios';

export const registrar = (newPC)=>{
    return axios
    .post('user/registrar',{
        gabinete:newPC.gabinete,
        software:newPC.software,
        processador:newPC.processador,
        placaDeVideo:newPC.placaDeVideo,
        cooler:newPC.cooler,
        placaMae:newPC.placaMae,
        memoria:newPC.memoria,
        hd:newPC.hd,
        email:newPC.email
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