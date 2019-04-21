import React, { Component } from "react";

import "./styles.css";
import api from "../../services/api";
import logo from "../../assets/logo.svg";

export default class Main extends Component {
  state = {
    newBox: ""
  };

  handleSubmit = async e => {
    e.preventDefault(); //previne o comporatamento padrão do form de atualizar a pagina

    const response = await api.post("/boxes", {
      title: this.state.newBox
    });
    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = e => {
    this.setState({ newBox: e.target.value });
  };
  render() {
    return (
      <div id="main_container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="Logo da rocketseat" />
          <input
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
