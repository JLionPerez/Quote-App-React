import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    quote: '' 
  };

  componentDidMount() {
    // console.log('COMPONENT DID MOUNT');
    // axios.get();
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({quote: advice})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { quote } = this.state
    return (
      <div className="app">
        <div className="card">
          <h1 className='heading'>{quote}</h1>
          <button className="button" onClick={this.fetchQuote}>
            <span>SEAL OF APPROVAL</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
