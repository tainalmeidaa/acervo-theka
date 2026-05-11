import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Meu Projeto de Treinamento</h1>
      <p>O contador está em: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  )
}

export default App