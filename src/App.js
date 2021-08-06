import logo from './logo.svg';
import './App.css';
import Select from 'react-select';
//npm i --save react-select

function App() {

  const options=[
    {
      value: 'value-one',
      label: 'label-one',
    },
    {
      value: 'value-two',
      label: 'label-two',
    },
    {
      value: 'value-three',
      label: 'label-three',
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          This is an example of how to make a dropdown button in React, since it's difficult to style the options in just HTML. 
        </p>
        <div style={{width: '15rem'}}>
        <Select
        options={options}
          placeholder="Select"/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
