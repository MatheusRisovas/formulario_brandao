import React, { Component } from 'react';
import { registrarUsuario } from './FuncUsuario';
import Swal from 'sweetalert2';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
}

class FormRegistroUsuario extends Component {
    constructor() {
        super();
        this.state = {
            nome: '',
            sobrenome: '',
            dataNasc: '',
            celular: '',
            email: '',
            senha: '',
            formErrors: {
                nome: '',
                sobrenome: '',
                dataNasc: '',
                celular: '',
                email: '',
                senha: ''
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`-- Submitting
          Nome:${this.state.nome}
          Sobrenome:${this.state.sobrenome}
          Data de Nascimento:${this.state.dataNasc}
          Celular:${this.state.celular}
          Email:${this.state.email}
          Senha:${this.state.senha}`);
            registrarUsuario(this.state);
            Swal.fire({
                title: "Sucesso",
                text: "Cadastro do usuário foi realizado com sucesso!",
                type: "success",
                button: "Ir Para  Cadastro do PC",
            }).then(willDelete => {
                this.continue();
            });
            // this.props.history.push('/');
        } else {
            Swal.fire({
                title: "Erro!",
                text: "Dados do formulário inválidos!",
                type: "error",
                button: "Ok"
            });
            // alert(`Dados do formulário inválidos!`);
            console.error('Form Ivalid - Display Error Message');
        }
    }
    continue = () => {
        this.props.nextStep();
    };
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        console.log('Name: ', name);
        console.log('Value: ', value);

        switch (name) {
            case 'nome':
                formErrors.nome =
                    value.length === 0 ?
                    'Campo está vazio.' :
                    '';
                break;
            case 'sobrenome':
                formErrors.sobrenome =
                    value.length === 0 ?
                    'Campo está vazio.' :
                    '';
                break;
            case 'dataNasc':
                formErrors.dataNasc =
                    value.length === 0 ?
                    'Campo está vazio.' :
                    '';
                break;
            case 'celular':
                formErrors.celular =
                    value.length === 0 ?
                    'Campo está vazio.' :
                    '';
                break;
            case 'email':
                formErrors.email =
                    emailRegex.test(value) ?
                    '' :
                    'Email inválido.';
                break;
            case 'senha':
                formErrors.senha =
                    value.length === 0 ?
                    'Campo está vazio.' :
                    '';
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }
    render() {
            const { formErrors } = this.state;
            return ( <
                    div className = "wrapper" >
                    <
                    div className = "form-wrapper" >
                    <
                    h1 > Dados do Usuário < /h1> <
                    form onSubmit = { this.handleSubmit }
                    noValidate >
                    <
                    div className = "firstName" >
                    <
                    label htmlFor = "nome" > Nome < /label> <
                    input type = "text"
                    className = { formErrors.nome.length > 0 ? 'error' : null }
                    placeholder = 'Nome'
                    name = "nome"
                    noValidate onBlur = { this.handleChange }
                    /> {
                    formErrors.nome.length > 0 && ( <
                        span className = 'errorMessage' > { formErrors.nome } < /span>
                    )
                } <
                /div> <
            div className = "lastName" >
                <
                label htmlFor = "sobrenome" > Sobrenome < /label> <
            input type = "text"
            className = { formErrors.sobrenome.length > 0 ? 'error' : null }
            placeholder = 'Sobrenome'
            name = "sobrenome"
            noValidate onBlur = { this.handleChange }
            /> {
            formErrors.sobrenome.length > 0 && ( <
                span className = 'errorMessage' > { formErrors.sobrenome } < /span>
            )
        } <
        /div> <
    div className = "firstName" >
        <
        label htmlFor = "dataNasc" > Data de Nascimento < /label> <
    input type = "date"
    className = { formErrors.dataNasc.length > 0 ? 'error' : null }
    placeholder = 'Data de Nascimento'
    name = "dataNasc"
    noValidate onBlur = { this.handleChange }
    /> {
    formErrors.dataNasc.length > 0 && ( <
        span className = 'errorMessage' > { formErrors.dataNasc } < /span>
    )
} <
/div> <
div className = "lastName" >
    <
    label htmlFor = "celular" > Celular < /label> <
input type = "text"
className = { formErrors.celular.length > 0 ? 'error' : null }
placeholder = 'Celular'
name = "celular"
noValidate onBlur = { this.handleChange }
/> {
formErrors.celular.length > 0 && ( <
    span className = 'errorMessage' > { formErrors.celular } < /span>
)
} <
/div> <
div className = "email" >
    <
    label htmlFor = "email" > Email < /label> <
input type = "text"
className = { formErrors.email.length > 0 ? 'error' : null }
placeholder = 'Email'
name = "email"
noValidate onBlur = { this.handleChange }
/> {
formErrors.email.length > 0 && ( <
    span className = 'errorMessage' > { formErrors.email } < /span>
)
} <
/div> <
div className = "email" >
    <
    label htmlFor = "senha" > Senha < /label> <
input type = "password"
className = { formErrors.senha.length > 0 ? 'error' : null }
placeholder = 'Senha'
name = "senha"
noValidate onBlur = { this.handleChange }
/> {
formErrors.senha.length > 0 && ( <
    span className = 'errorMessage' > { formErrors.senha } < /span>
)
} <
/div> <
div className = "createAccount" >
    <
    button type = 'submit' > Registrar Usuário < /button> < /
    div > <
    /form> < /
    div > <
    /div>
);
}
}

export default FormRegistroUsuario;