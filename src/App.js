import './App.css';
import 'styled-components'
import React, {useState, useEffect} from 'react';
import DataTable , {createTheme} from 'react-data-table-component';

const App = () => {
  //1 - Configurar los hooks
  const [users, setUsers] = useState( [] )

  //2 - Función para mostrar los datos con fetch
  const URL = 'https://gorest.co.in/public/v2/users'
  const showData = async () => {
    const response = await fetch(URL)
    const data     = await response.json()
    console.log(data)
    setUsers(data)
  }

  useEffect( ()=>{
    showData()
  }, [])

  //3 - Configuramos las columns para Tabla de Datos
  const columns = [
    {
      name: 'ID',
      selector: row => row.id
    },
    {
      name: 'NOMBRE',
      selector: row => row.name
    },
    {
      name: 'E-MAIL',
      selector: row => row.email
    },
    {
      name: 'GENERO',
      selector: row => row.gender
    },
    {
      name: 'ESTATUS',
      selector: row => row.status
    },

  ]

  //personalizar temas
 /*  createTheme('custom', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark'); */
  
  const MyComponent = () => (
    <DataTable
      title="KILBER MARCANO"
      columns={columns}
      theme="solarized"
    />
  );

  //4 - Mostramos la data en DataTable
  return (
    <div className="App">
      <h1>Tabla de Datos React (APIs)</h1>
     <DataTable 
      columns={columns}
      data={users}
      //theme='custom' //habilitar esta linea y descomentar createTheme()
      pagination
     />
    </div>
  );
}

export default App;