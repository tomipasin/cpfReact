import React, { Component } from 'react';
import { Button, InputGroup, InputGroupAddon, Input, Alert } from 'reactstrap';

class Validar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            valid: 'N'
        }
    }

    AtualizaDados = (e) => {
        this.setState({ input: e.target.value })

    };


    Valida = () => {
        //buscar o cpf informado que está em state.input
        let cpfBruto = this.state.input
        //formatar o número tirando o que não for número.
        let cpf = cpfBruto.replace(/\D+/g, '')
        console.log(cpf)

        //1º conjunto de 3 dígitos
        const d1S = cpf.slice(0, 1);
        const d2S = cpf.slice(1, 2);
        const d3S = cpf.slice(2, 3);

        const d1 = parseInt(d1S);
        const d2 = parseInt(d2S);
        const d3 = parseInt(d3S);

        //2º conjunto de 3 dígitos
        const d4S = cpf.slice(3, 4);
        const d5S = cpf.slice(4, 5);
        const d6S = cpf.slice(5, 6);

        const d4 = parseInt(d4S);
        const d5 = parseInt(d5S);
        const d6 = parseInt(d6S);

        //3º conjunto de 3 dígitos
        const d7S = cpf.slice(6, 7);
        const d8S = cpf.slice(7, 8);
        const d9S = cpf.slice(8, 9);

        const d7 = parseInt(d7S);
        const d8 = parseInt(d8S);
        const d9 = parseInt(d9S);

        //verificadores
        const d10S = cpf.slice(9, 10);
        const d11S = cpf.slice(10, 11);

        const d10 = parseInt(d10S);
        const d11 = parseInt(d11S);


        //Aqui exibo no console o CPF separado em dígitos.
        console.log(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11)

        const soma = (d1 * 10) + (d2 * 9) + (d3 * 8) + (d4 * 7) + (d5 * 6) + (d6 * 5) + (d7 * 4) + (d8 * 3) + (d9 * 2);
        //disso resulta um número
        console.log(`Soma 1º fase: ${soma}`);

        //aqui verifico o resultado da soma vezes 10 dividido por 11. preciso do resto dessa divisão. 
        const resto1 = ((soma * 10) % 11);
        //o resto, caso esteja entre 1 e 9 será o meu dígito verificador.
        let ver1 = resto1;


        if (resto1 !== 10) {
            //atribui a ver1 o valor do próprio resto. Um número entre 1 e 9.
            ver1 = resto1;
            console.log(`1º dígito verificador INFORMADO: ${d10} / CALCULADO: ${ver1}`)

        } else {
            //atribuo a ver1 o valor de 0.
            ver1 = 0;
            console.log(`1º dígito verificador INFORMADO: ${d10} / CALCULADO: ${ver1}`)

        };


        //aqui faço a 2º fase de somas e multiplicações dos dígitos, agora incluindo o ver1 na conta.
        const soma2 = (d1 * 11) + (d2 * 10) + (d3 * 9) + (d4 * 8) + (d5 * 7) + (d6 * 6) + (d7 * 5) + (d8 * 4) + (d9 * 3) + (ver1 * 2);
        //disso resulta um número.
        console.log(`Soma 2º fase: ${soma2}`);

        //armazeno aqui o resto da conta de soma2 * 10 % 11. 
        const resto2 = ((soma2 * 10) % 11);
        //atribuo a var2 o resto2
        let ver2 = resto2;
        //e mostro...
        console.log(`Resto2: ${resto2}`);


        if (resto2 !== 10) {
            ver2 = resto2;
            console.log(`2º dígito verificador INFORMADO: ${d11} / CALCULADO: ${ver2}`)

        } else {
            ver2 = 0;
            console.log(`2º dígito verificador INFORMADO: ${d11} / CALCULADO: ${ver2}`)

        };

        if (d10 === ver1 && d11 === ver2) {
            //se for é cpf válido
            console.log('Válido')
            const valid = true;
            this.Altera(valid)



        } else {
            console.log('inválido')
            const valid = false;
            this.Altera(valid)

        }

        // this.Result(this.state.valid)
        // console.log('aqui')
    };

    Altera = (v) => {
        console.log(v)
        this.setState({ valid: v })
        console.log(this.state.valid)

    }


    Result = (v) => {
        if (v === true) {
            return ( <Alert color="success">Válido! </Alert>)

        } 
            if (v === '' || v === false) {
                return ( <Alert color="danger">Inválido! </Alert>)
}

        
    }


    render() {
        return (
            <div>
                <InputGroup>
                    <Input name="cpfInput" type="text" onChange={this.AtualizaDados} />
                    <InputGroupAddon addonType="prepend"><Button outline color="secondary" onClick={this.Valida} >Validar</Button></InputGroupAddon>
                </InputGroup>
                <br/>
                <h3>{this.Result(this.state.valid)}</h3>

            </div>
        );
    }
}


export default Validar;