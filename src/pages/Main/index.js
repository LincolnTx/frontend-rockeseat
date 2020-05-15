import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

import "./styles.css";
import api from "../../services/api";
import logo from "../../assets/logo.svg";

export default function Main() {

  const history = useHistory(); 

  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [chassi, setChassi] = useState('');
  const [renavam, setRenavam] = useState('');
  const [marca, setMarca] = useState('');
  const [cor, setCor] = useState('');
  const [valorPago, setValorPago] = useState('');
  const [mesIpva, setMesIpva] = useState('');
  const [kmAtual, setKmAtual] = useState('');



  async function handleSubmit (e)  {
    e.preventDefault(); //previne o comporatamento padrão do form de atualizar a pagina

    console.log({
      placa,
      modelo,
      ano,
      chassi,
      renavam,
      marca,
      cor,
      valorPago,
      mesIpva,
      kmAtual
    });
    
    const data = {
      placa,
      modelo,
      ano,
      chassi,
      renavam,
      marca,
      cor,
      valorPago,
      mesIpva,
      kmAtual
    }

    try {
      const response = await api.post("/veiculos", data);

      alert(`Veiculo cadastrado com sucesso, placa: ${response.data.placa}`);

      history.push('/list');

    } catch (err) {
      alert('Erro no cadastro tente novamente');
    }

    // history.push('/list');
    
  };


    return (
      <div id="main_container">
        <form onSubmit={handleSubmit}>
          <img src={logo} alt="Logo da rocketseat" />
          <input
            placeholder="Placa"
            value={placa}
            onChange={ e => setPlaca(e.target.value)}
          />
          <input
            placeholder="Modelo"
            value={modelo}
            onChange={ e => setModelo(e.target.value)}
          />
          <input
            placeholder="Ano"
            value={ano}
            onChange={ e => setAno(e.target.value)}
          />
          <input
            placeholder="Chassi"
            value={chassi}
            onChange={ e => setChassi(e.target.value)}
          />
          <input
            placeholder="Renavam"
            value={renavam}
            onChange={ e => setRenavam(e.target.value)}
          />
          <input
            placeholder="Marca"
            value={marca}
            onChange={ e => setMarca(e.target.value)}
          />
          <input
            placeholder="Cor"
            value={cor}
            onChange={ e => setCor(e.target.value)}
          />
          <input
            placeholder="Valor Pago"
            value={valorPago}
            onChange={ e => setValorPago(e.target.value)}
          />
          <input
            placeholder="Mes IPVA"
            value={mesIpva}
            onChange={ e => setMesIpva(e.target.value)}
          />
          <input
            placeholder="Km Atual"
            value={kmAtual}
            onChange={ e => setKmAtual(e.target.value)}
          />

          <button type="submit">Criar</button>
        </form>
      </div>
    );
  
}
