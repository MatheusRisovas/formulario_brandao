import React, { Component } from 'react'
import { registrarPC } from './FuncPC';
import swal from 'sweetalert';

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

class FormRegistro extends Component {
    constructor() {
        super();
        this.state = {
            gabinete: '',
            software: '',
            processador: '',
            placaDeVideo: '',
            cooler: '',
            placaMae: '',
            memoria: '',
            hd: '',
            formErrors: {
                gabinete: '',
                software: '',
                processador: '',
                placaDeVideo: '',
                cooler: '',
                placaMae: '',
                memoria: '',
                hd: ''            }
        }
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    handleSubmit = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`-- Submitting
          Gabinete:${this.state.gabinete}
          Software:${this.state.software}
          Processador:${this.state.processador}
          Placa de Vídeo:${this.state.placaDeVideo}
          Cooler:${this.state.cooler}
          Placa Mãe:${this.state.placaMae}
          Memória:${this.state.memoria}
          HD:${this.state.hd}`);
            registrarPC(this.state);
            swal({
                title: "Sucesso",
                text: "Cadastro do PC foi realizado com sucesso!",
                icon: "success",
                button: "OK",
                }).then(willDelete=>{
                  this.continue();
                });
            // this.props.history.push('/login');
        } else {
            alert(`Dados do formulário inválidos!`);
            console.error('Form Ivalid - Display Error Message');
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        console.log('Name: ', name);
        console.log('Value: ', value);


        switch (name) {
            case 'gabinete':
                formErrors.gabinete =
                    value.length === 0
                        ?
                        'Campo está vazio.'
                        : '';
                break;
            case 'software':
                formErrors.software =
                    value.length === 0
                        ?
                        'Campo está vazio.'
                        : '';
                break;
            case 'processador':
                formErrors.processador =
                    value.length === 0
                        ?
                        'Campo está vazio.'
                        : '';
                break;
            case 'placaDeVideo':
                formErrors.placaDeVideo =
                    value.length === 0
                        ?
                        'Campo está vazio.'
                        : '';
                break;
            case 'cooler':
                formErrors.cooler =
                    value.length === 0
                        ?
                        'Campo está vazio.'
                        : '';
                break;
            case 'placaMae':
                formErrors.placaMae =
                    value.length === 0
                        ?
                        'Campo está vazio.'
                        : '';
                break;
            case 'memoria':
                formErrors.memoria =
                    value.length === 0
                        ?
                        'Campo está vazio.'
                        : '';
                break;
            case 'hd':
                formErrors.hd =
                    value.length === 0
                        ?
                        'Campo está vazio.'
                        : '';
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }
    render() {
        const { formErrors } = this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Dados do PC</h1>
                    <form onSubmit={this.handleSubmit} noValidate >
                        <div className="firstName">
                            <label htmlFor="gabinete">Gabinete</label>
                            <input type="text" className={formErrors.gabinete.length > 0 ? 'error' : null} placeholder='Gabinete'
                                name="gabinete" noValidate onBlur={this.handleChange} />
                            {formErrors.gabinete.length > 0 && (
                                <span className='errorMessage'>{formErrors.gabinete}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="software">Software</label>
                            <input type="text" className={formErrors.software.length > 0 ? 'error' : null} placeholder='Software'
                                name="software" noValidate onBlur={this.handleChange} />
                            {formErrors.software.length > 0 && (
                                <span className='errorMessage'>{formErrors.software}</span>
                            )}
                        </div>
                        <div className="firstName">
                            <label htmlFor="processador">Processador</label>
                            <input type="text" className={formErrors.processador.length > 0 ? 'error' : null} placeholder='Processador'
                                name="processador" noValidate onBlur={this.handleChange} />
                            {formErrors.processador.length > 0 && (
                                <span className='errorMessage'>{formErrors.processador}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="placaDeVideo">Placa de Vídeo</label>
                            <input type="text" className={formErrors.placaDeVideo.length > 0 ? 'error' : null} placeholder='Placa de Vídeo'
                                name="placaDeVideo" noValidate onBlur={this.handleChange} />
                            {formErrors.placaDeVideo.length > 0 && (
                                <span className='errorMessage'>{formErrors.placaDeVideo}</span>
                            )}
                        </div>
                        <div className="firstName">
                            <label htmlFor="cooler">Cooler</label>
                            <input type="text" className={formErrors.cooler.length > 0 ? 'error' : null} placeholder='Cooler'
                                name="cooler" noValidate onBlur={this.handleChange} />
                            {formErrors.cooler.length > 0 && (
                                <span className='errorMessage'>{formErrors.cooler}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="placaMae">Placa Mãe</label>
                            <input type="text" className={formErrors.placaMae.length > 0 ? 'error' : null} placeholder='Placa Mãe'
                                name="placaMae" noValidate onBlur={this.handleChange} />
                            {formErrors.placaMae.length > 0 && (
                                <span className='errorMessage'>{formErrors.placaMae}</span>
                            )}
                        </div>
                        <div className="firstName">
                            <label htmlFor="memoria">Memória</label>
                            <input type="text" className={formErrors.memoria.length > 0 ? 'error' : null} placeholder='Memória'
                                name="memoria" noValidate onBlur={this.handleChange} />
                            {formErrors.memoria.length > 0 && (
                                <span className='errorMessage'>{formErrors.memoria}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="hd">HD</label>
                            <input type="text" className={formErrors.hd.length > 0 ? 'error' : null} placeholder='HD'
                                name="hd" noValidate onBlur={this.handleChange} />
                            {formErrors.hd.length > 0 && (
                                <span className='errorMessage'>{formErrors.hd}</span>
                            )}
                        </div>
                        <div className="btnVoltar">
                            <button type='button' onClick={this.back}>Voltar</button>
                        </div>
                        <div className="createAccount">
                            <button type='submit'>Registrar PC</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormRegistro;