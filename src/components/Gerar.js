import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class Gerar extends Component {
    constructor() {
        super()
        this.state = {
            cpf: ''
        }
    }

    Gerar = () => {
        //crio uma var pra cada dígito entre 0 e 9 e defino como Number
        const d1 = Number(Math.floor((Math.random() * (9 - 0) + 0)));
        const d2 = Number(Math.floor((Math.random() * (9 - 0) + 0)));
        const d3 = Number(Math.floor((Math.random() * (9 - 0) + 0)));
        const d4 = Number(Math.floor((Math.random() * (9 - 0) + 0)));
        const d5 = Number(Math.floor((Math.random() * (9 - 0) + 0)));
        const d6 = Number(Math.floor((Math.random() * (9 - 0) + 0)));
        const d7 = Number(Math.floor((Math.random() * (9 - 0) + 0)));
        const d8 = Number(Math.floor((Math.random() * (9 - 0) + 0)));
        const d9 = Number(Math.floor((Math.random() * (9 - 0) + 0)));
        //os dígitos 10 e 11 são os verificadores. Crio o 1º deles e depois o 2º
        let d10 = ((d1 * 10 + d2 * 9 + d3 * 8 + d4 * 7 + d5 * 6 + d6 * 5 + d7 * 4 + d8 * 3 + d9 * 2) * 10) % 11;;
        let d11 = ((d1 * 11 + d2 * 10 + d3 * 9 + d4 * 8 + d5 * 7 + d6 * 6 + d7 * 5 + d8 * 4 + d9 * 3 + d10 * 2) * 10) % 11;
        //coloco uma condicional para  caso o resto seja 10 o 
        //valor atribuído será para 0
        const d10p = ((d1 * 10 + d2 * 9 + d3 * 8 + d4 * 7 + d5 * 6 + d6 * 5 + d7 * 4 + d8 * 3 + d9 * 2) * 10) % 11;
        if (d10p >= 10) {
            d10 = 0;
        } else {
            d10 = d10p;
        };
        const d11p = ((d1 * 11 + d2 * 10 + d3 * 9 + d4 * 8 + d5 * 7 + d6 * 6 + d7 * 5 + d8 * 4 + d9 * 3 + d10 * 2) * 10) % 11;
        if (d11p >= 10) {
            d11 = 0;
        } else {
            d11 = d11p;
        };
        //e aqui crio uma const para o CPF gerado. Isiro texto e pontos. Não tem
        //problema pois vou "filtrar" o que quero disso com uma regEx em seguida.
        const cpf = `${d1}${d2}${d3}.${d4}${d5}${d6}.${d7}${d8}${d9}-${d10}${d11}`;
        console.log(cpf);

        this.setState({ cpf: cpf })


    }






    render() {
        return (
            <div>


                <Button outline color="info" onClick={this.Gerar}>Gerar</Button>
                <br/><br/>

                <h2><Badge color="success">{this.state.cpf}</Badge></h2>


            </div>

        )
    }
}



export default Gerar;
