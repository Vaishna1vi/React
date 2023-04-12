import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {

  // const decor = {
  //   'color' : 'blue',
  //   'backgroundColor' : 'pink',
  // }
  const person = {
    'name' : 'vaishnavi',
    'reg_no' : '22MCA10189',
  }
  return (
    <>
    {/* <Person name={'akanksha'} reg_no={'22'}  city={'gwalior'} age={'21'} sirname={'Shrivastava'} />
    <Person reg_no={'22MCA10189'} />
    <Person  />
    <Person /> */}

    {/* <div style={{'color':'blue', 'fontStyle':'italic'}}> */}

    {/* <div style={decor}> */}

    <div className='demo'>

{person.name}
{" "}
{person.reg_no}

</div>
</>
  );
}

export default App;
