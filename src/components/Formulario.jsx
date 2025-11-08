import React from 'react'

const Formulario = () => {
  return (
    <div className='Formulario'>
        <input type="text" placeholder='Nome da Tarefa' />
        <input type="text" placeholder='Descricao da Tarefa'/>
        <button>Confirmar</button>
    </div>
  )
}

export default Formulario