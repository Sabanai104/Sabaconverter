import React from 'react';
import './style.css';

export default class TelaInicial extends React.Component {
    render() {
        return(
        <div>
            <div className="header"><h1>Sabaconverter</h1></div>
            <div className="mainText">
                <h2 className="title">Como funciona?</h2>
                <p className="text">
                Seja bem vindo ao Sabaconverter! Como gamers nos sabemos da tristeza 
                que é quando vc encontra sua sensibilidade perfeita para um jogo mas não é a mesma para outro. 
                Por isso, criamos uma ferramenta que possa proporcionar uma experiencia mais igualitaria entre seus jogos
                de maneira que voce se sinta confortavel com a sua sensibilidade em todos eles.
                </p>
            </div>
        </div>
        )
    }
}

// export default function TelaInicial(props) {
//     return (
//         <div>Hello World! Hello{props.name} </div>
//     )
// }