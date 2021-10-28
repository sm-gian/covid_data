import React, { Component } from 'react';
import api from './api';

class App extends Component{

  state= {
    pesquisa: [],
  }

  async componentDidMount(){

    var search = 4 

    switch (search) {
      case 1: //pesquisa por todos estados
        search = "";
        break;

      case 2: //pesquisa por um estado específico
        search = "/brazil/uf/sp" //altera-se a ultima sigla pelo estado procurado
        break;

      case 3: //consulta por data específica
        search = "/brazil/20211028" //altera-se a data no formato AAAA/MM/DD
        break;

      case 4: //consulta por país
        search = "/japan" //altera-se com o nome do país
        break;  

      default:
        search = 0;
        break;
    }

    const response = await api.get(search);

    this.setState({pesquisa: response.data});
  }

  render(){

    const {pesquisa} = this.state;

    return(
      <div>
        {console.log (pesquisa)}
      </div>
    );
  };
};


export default App;
