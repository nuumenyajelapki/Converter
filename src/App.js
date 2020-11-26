import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [m_usd, setMUSD] = useState(0);
  const [m_eur, setMEUR] = useState(0);
  const [m_jpy, setMJPY] = useState(0);
  const [usd, setUSD] = useState("Mooooneey");
  const [eur, setEUR] = useState("Mooooneey");
  const [jpy, setJPY] = useState("Mooooneey");
  const [rub, setRUB] = useState(0);

  const handleOnChange = (value, multiplier) => {
    setRUB(value*multiplier)
  }

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(response => response.json())
      .then(body => {
        setMUSD(body.Valute.USD.Value);
        setMEUR(body.Valute.EUR.Value);
        setMJPY(body.Valute.JPY.Value);
      })
  }, []);

  return (
    <div className="App">
      <h1>Convert me</h1>
      <div className="card">
        <div className="card-body" style={{color: '#0F0E17'}}>
          <div className="input-group input-group-lg flex-nowrap">
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-wrapping">$</span>
            </div>
            <input type="text" className="form-control"
            placeholder="Mooooneey" aria-label="Username"
            aria-describedby="addon-wrapping"
            pattern="[0-9]*" inputmode="numeric"
            value={usd}
            onFocus={(e)=>{
              e.target.value = ''
            }
            }
            onChange={(e)=>{
              handleOnChange(e.target.value, m_usd)
              setUSD(e.target.value)
              setEUR("")
              setJPY("")
            }
            }/>
          </div>
          <div className="input-group input-group-lg flex-nowrap" style={{marginTop: '25px'}}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-wrapping">€</span>
            </div>
            <input type="text" className="form-control"
            placeholder="Mooooneey" aria-label="Username"
            aria-describedby="addon-wrapping"
            pattern="[0-9]*" inputmode="numeric"
            value={eur}
            onFocus={(e)=>{
              e.target.value = ''
            }
            }
            onChange={(e)=>{
              handleOnChange(e.target.value, m_eur)
              setEUR(e.target.value)
              setUSD("")
              setJPY("")
            }
            }/>
          </div>
          <div className="input-group input-group-lg flex-nowrap" style={{marginTop: '25px'}}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-wrapping">¥</span>
            </div>
            <input type="text" className="form-control"
            placeholder="Mooooneey" aria-label="Username"
            aria-describedby="addon-wrapping"
            pattern="[0-9]*" inputmode="numeric"
            value={jpy}
            onFocus={(e)=>{
              e.target.value = ''
            }
            }
            onChange={(e)=>{
              handleOnChange(e.target.value, m_jpy)
              setJPY(e.target.value)
              setUSD("")
              setEUR("")
            }
            }/>
          </div>
          <div className="input-group input-group-lg flex-nowrap" style={{marginTop: '25px'}}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-wrapping">₽</span>
            </div>
            <input type="text" className="form-control"
            placeholder={rub} aria-label="Username"
            aria-describedby="addon-wrapping" disabled={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
