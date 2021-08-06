import './App.css';
import { useState } from "react";
import Select from 'react-select';
//npm i --save react-select



function App() {

  const [input, setInput] = useState('');
  const [getal, setGetal] = useState('');

  const nameChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const getalChangeHandler = (value) => {
    setGetal(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: input,
      number: getal,
    }
    console.log(data);
    setInput('');
    setGetal(null);
  }

  

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
    color: state.isSelected ? 'blue' : 'red',
    backgroundColor: 'white',
    padding: 20,
    fontSize: '1rem',
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
        
        <p className="text">
          This is an example of how to make a dropdown button in React, since it's difficult to style the options in just HTML. 
        </p>
        <div>
        <form className="form" onSubmit={handleSubmit}>
        <div>
					<label htmlFor="name"></label>
					<input
						type="text"
						id="name"
						placeholder="Voornaam"	
						required
            onChange={nameChangeHandler}
            value={input}
					/>
          
				</div>
        <Select
        options={options}
        styles={customStyles}
        placeholder={<div className="placeholder">Select</div>}
        value={getal}
        onChange={getalChangeHandler}
        />
        <button type='onSubmit'>Ok</button>
        </form>
        </div>
      
    </div>
  );
}

export default App;
