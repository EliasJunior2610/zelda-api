import './App.css'
import { Button } from './components/ui/button'

function App() {
  const handleClick = () => {
    alert('Botão clicado!');
  };
  return (
    <>
      <Button className='hover:cursor-pointer' onClick={handleClick}>Teste</Button>
    </>
  )
}

export default App
