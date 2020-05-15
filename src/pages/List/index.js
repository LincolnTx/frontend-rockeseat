import React, { useEffect, useState }from 'react';
import api from '../../services/api';

export default function List() {
    const [veiculos, setVeiculos]  = useState([]); 
    useEffect(() => {
        api.get('veiculos')
            .then(response => {
                setVeiculos(response.data);
            });
    }, []);

    return (
        <div className="dashboard-container">
            <header>
                {/* <img src={logo} alt="trader logo"/> */}

                <a className="button" > 
                    {/* Ver carteira */}
                    Lista de Veiculos 
                </a>
                
            </header>

            <h1>Veiculos disponíveis</h1>

            <ul>
                {veiculos.map( veiculo => (
                    <li>
                        <strong>Placa:</strong>
                        <p>{veiculo.placa}</p>

                        <strong>Modelo:</strong>
                        <p>{veiculo.modelo}</p>

                        <strong>Ano</strong>
                        <p>{veiculo.ano}</p>

                        <strong>Chassi:</strong>
                        <p>{veiculo.chassi}</p>

                        <strong>Renavam:</strong>
                        <p>{veiculo.renavam}</p>

                        <strong>Marca:</strong>
                        <p>{veiculo.marca}</p>

                        <strong>Cor:</strong>
                        <p>{veiculo.cor}</p>

                        <strong>Valor Pago:</strong>
                        <p>{veiculo.valorPago}</p>

                        <strong>Mes IPVA:</strong>
                        <p>{veiculo.mesIpva}</p>

                        <strong>Km Atual:</strong>
                        <p>{veiculo.kamAtual}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
