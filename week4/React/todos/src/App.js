import Header from  './components/header';
import TodoIteam from './components/toiteam';
import Button from './components/Button';
import "./style.css";

function App() {
  return(
    <div className='Todo-Container'>
      <Header />
      <TodoIteam />
      <Button />
    </div>
  )
 
}

export default App;
