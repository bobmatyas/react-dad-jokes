import React from 'react';

import {ShowDadJoke} from './show-dad-joke'

class DadJoke extends React.Component {

  state = {data: [], loading: false};

  componentDidMount() {
    console.log('The component is mounted');
    this.setState({loading: true});
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': '90sdadz'
      }
    })
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}, () => {
          console.log(this.state.data);
        })
      );
  }


  render () {
    return (
      <ShowDadJoke joke={this.state.data.joke} />
    );  
  }
}

export default DadJoke;