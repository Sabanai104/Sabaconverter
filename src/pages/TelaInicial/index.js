import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

import mouseImg from '../../assets/mouseImg.png'
import Header from '../../components/Header';

export default function TelaInicial() {
    const history = useHistory();
    function pressButton() {
        history.push("/Home");
    }
    return (
        <div>
            <Header className="header" />
            <div className="mainText">
            <img className="mouseImg" src={mouseImg} alt="" />
                <h2 className="title">Como funciona?</h2>
                <p className="text">
                    Seja bem vindo ao Sabaconverter! Como gamers nos sabemos da tristeza
                    que é quando vc encontra sua sensibilidade perfeita para um jogo mas não é a mesma para outro.
                    Por isso, criamos uma ferramenta que possa proporcionar uma experiencia mais igualitaria entre seus jogos
                    de maneira que voce se sinta confortavel com a sua sensibilidade em todos eles.
                </p>
                <button className="buttonIniciar" onClick={pressButton}>Iniciar!</button>
            </div>
        </div>
    )
}

// export default function TelaInicial(props) {
//     return (
//         <div>Hello World! Hello{props.name} </div>
//     )
// }