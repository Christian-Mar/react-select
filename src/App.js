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
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'pink',
    backgroundColor: 'white',
    padding: 20,
    fontSize: '0.5rem',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
    color: 'yellow',
  }), 
  singleValue: (provided, state) => {
    
    const color = 'darkblue';
    const backgroundColor = 'white';
    const padding = '0.5rem'
    const fontSize= '1rem';

    return { ...provided, color, fontSize, backgroundColor, padding };
  }
}

  return (
    <div className="App">
      <header className="App-header">
        
        <p className="text">
          This is an example of how to make a dropdown button in React, since it's difficult to style the options in just HTML. 
        </p>
        <div>
        <Select
        options={options}
        styles={customStyles}
        placeholder={<div className="placeholder">Select</div>}
        />
        </div>
      </header>
    </div>
  );
}

export default App;
