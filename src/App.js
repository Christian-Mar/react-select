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
  
  const customStyles = {
  option: (provided, state) => ({
    //...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'pink',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
    color: 'blue',
  }), 
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.8 : 1;
    const transition = 'opacity 300ms';
    const color = 'gold'

    return { ...provided, opacity, transition, color };
  }
}

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          This is an example of how to make a dropdown button in React, since it's difficult to style the options in just HTML. 
        </p>
        <div>
        <Select
        options={options}
        styles={customStyles}
        label="dropdown"
        placeholder="Select"
        theme={theme => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      neutral50: 'orange',  // Placeholder color
    }
  })}/>
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
