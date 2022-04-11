import car from './car.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const App = ()=> {
  return (
    <div className="App">
      <img src={car} style={{width:"400px"}} alt='#'/>
          <h1>Car  Registration App</h1>
          <TextField id="outlined-basic" label="Brand Name" variant="outlined" />
          <TextField id="outlined-basic" label="Model" variant="outlined" />
          <TextField id="outlined-basic" label="Year" variant="outlined" />
          <TextField id="outlined-basic" label="Hourse Power" variant="outlined" />
          <Button variant="contained">Contained</Button>
    </div>
  );
}

export default App;
