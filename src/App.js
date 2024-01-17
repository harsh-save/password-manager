//import './App.css';
import {useState} from 'react';

function App() {

  // States
  const [passwordLength, setPasswordLength] = useState();
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialchars, setSpecialchars] = useState(false);
  const [result, setResult] = useState('');

  // Actions
  
  const generateCharSet = ()=>{
    let charSet = ''
    if (uppercase){
      charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (lowercase){
      charSet += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (numbers){
      charSet += '1234567890'
    }
    if (specialchars){
      charSet += '!@#$%^&*'
    }
    return charSet
  }

  const generatePassword = () =>{
    let characters = generateCharSet()
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < passwordLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    setResult(result)
  }

  return (
    <div className="container">
      <div className="main-box">
        <br />
        <h3>Password Generator</h3>
        <br />
        <input type="text" className="form-control" readOnly value={result}/>
        <br />

        <label class="form-label">Password length</label>
        <input type="number" className="form-control"  min = {10} max = {30} onChange={(e) => setPasswordLength(e.target.value)}/>

        <br />
        <div className="form-check">
        <input type="checkbox" className="form-check-input" onChange={()=>setUppercase(!uppercase)}/>
        <label class="form-check-label">Uppercase Characters</label>
        </div>

        <br />
        <div className="form-check">
        <input type="checkbox" className="form-check-input" onChange={()=>setLowercase(!lowercase)}/>
        <label class="form-check-label">Lowercase Characters</label>
        </div>

        <br />
        <div className="form-check">
        <input type="checkbox" className="form-check-input" onChange={()=>setNumbers(!numbers)}/>
        <label class="form-check-label">Numbers</label>
        </div>

        <br />
        <div className="form-check">
        <input type="checkbox" className="form-check-input" onChange={()=>setSpecialchars(!specialchars)}/>
        <label class="form-check-label">Special Characters</label>
        </div>
        <br />
        <button className="btn btn-outline-primary btn-lg" onClick={generatePassword}>Generate Password</button>

        
      </div>
    </div>
  );
}

export default App;
