import React, { Component } from 'react';
import FormRegistroPC from './FormRegistroPC';
import FormRegistroUsuario from './FormRegistroUsuario';

class FormRegistro extends Component {
    constructor() {
        super();
        this.state = {
            step: 1
        }
    }
    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };
    render() {
        const { step } = this.state;
        switch (step) {
            case 1:
                return (
                    <FormRegistroUsuario nextStep={this.nextStep} />
                );
            case 2:
                return (
                    <FormRegistroPC prevStep={this.prevStep} />
                );
        }
    }
}

export default FormRegistro;