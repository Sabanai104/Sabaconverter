import React from 'react';
import './style.css';

export default class TelaInicial extends React.Component {
    render() {
        return(
        <div>
            <div className="header"><h1>Sabaconverter</h1></div>
            <div className="mainText"></div>
        </div>
        )
    }
}

// export default function TelaInicial(props) {
//     return (
//         <div>Hello World! Hello{props.name} </div>
//     )
// }