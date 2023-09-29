import { useState } from 'react'
import './App.css'

function App() {

  const [qtd_milhas, setQtd_milhas] = useState<number>(0)

  const [preco_milheiro, setPreco_milheiro] = useState<number>(70)

  const [bonus, setBonus] = useState<number>(0)

  const botaoMilhas = (valor: number) => {
    setQtd_milhas(qtd_milhas + valor)
  }

  const botaoPreco = (valor: number) => {
    setPreco_milheiro(preco_milheiro + valor)
  }

  const botaoBonus = (valor: number) => {
    setBonus(bonus + valor)
  }

  return (
    <>
      <p>Milhas:</p>
      <button onClick={() => botaoMilhas(-1000)}>-1k</button><button onClick={() => botaoMilhas(-10000)}>-10k</button><input type="text" placeholder='Quantidade' value={qtd_milhas} readOnly/><button onClick={() => botaoMilhas(10000)}>+10k</button><button onClick={() => botaoMilhas(1000)}>+1k</button>
      <p>Preço milheiro</p>
      <button onClick={() => botaoPreco(-5)}>-5</button><button onClick={() => botaoPreco(-1)}>-1</button><input type="text" placeholder='preco' value={preco_milheiro} readOnly/><button onClick={() => botaoPreco(1)}>+1</button><button onClick={() => botaoPreco(5)}>+5</button>
      <p>Bônus</p>
      <button onClick={()=> botaoBonus(-100)}>-100</button><button onClick={()=> botaoBonus(-10)}>-10</button><button onClick={()=> botaoBonus(-5)}>-5</button><input type="text" placeholder='bonus' value={`${bonus} %`} readOnly/><button onClick={() => botaoBonus(5)}>+5</button><button onClick={() => botaoBonus(10)}>+10</button><button onClick={() => botaoBonus(100)}>+100</button>
      {bonus > 0 && <p>Na compra de {qtd_milhas} milhas, você receberá mais {qtd_milhas * (bonus / 100)}. <br />O preço real do milheiro cai para R$ {(preco_milheiro / ((qtd_milhas) + (qtd_milhas / (bonus / 100)) / 1000)).toFixed(2)}</p>}
      <h2>Quantidade final de milhas</h2>
      <p>{qtd_milhas + (qtd_milhas * bonus / 100)}</p>
      <h2>Valor final</h2>
      <p>R$ {(preco_milheiro * (qtd_milhas / 1000)).toFixed(2)}</p>
    </>
  )
}

export default App
