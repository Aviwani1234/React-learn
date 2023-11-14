import './App.css';
import Card from './components/Card';

function App() {

  let arr = [1,2,3]
  let obj = {
    name : "Avi",
    age : 21
  }
  return (
    <>
      <h1 className='box-border h-14 w-32 bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="first_card" newArr = {arr} newObj={obj}/>
      <Card username="second_card"/>
    </>
  );
}

export default App;
