import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'

const data:Array<PacoteType> = [
  {
    id:"23552385-d5b6-4c7c-b450-4a8bf08ef7d5",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34  
  }
]

function App() {
    return (
      <section>
        <h2>Pacotes</h2>
        <div className='pacotes'>
        {data.map(p =><Pacote pacote={p}/>)}
        </div>
    </section>
    )
}

export default App