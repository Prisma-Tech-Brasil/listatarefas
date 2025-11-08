import React from 'react'
import Tarefa from './components/Tarefa'
import Formulario from './components/Formulario'
import './App.css'

const App = () => {
  let listatarefas = [
    {id:0, nome:"Passear com Cachorro", descricao:"Passear no dia 05/11", status:"Pendente"},
    {id:1, nome:"Estudar", descricao:"React", status:"Pendente"},
    {id:3, nome:"Sei la", descricao:"Fazer alguma coisa", status:"Pendente"}
  ]

  return (
    <div className='App'>
      <h1>Lista de Tarefas</h1>
      <div className='ListaTarefas'>
        {
          listatarefas.map(
            (tarefa) =>
              (<Tarefa 
                id={tarefa.id} 
                nome={tarefa.nome}
                descricao={tarefa.descricao}
                status={tarefa.status}
              />) 
          )
        }
      </div>
      <Formulario />
    </div>
  )
}

export default App