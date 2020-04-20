import React from 'react';

export default class TelaInicial extends React.Component {
    render() {
        return(
        <div>Seja bem vindo a área de texto {this.props.name}! </div>
        )
    }
}

// export default function TelaInicial(props) {
//     return (
//         <div>Hello World! Hello{props.name} </div>
//     )
// }