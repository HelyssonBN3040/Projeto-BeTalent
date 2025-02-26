import { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import LogoBeTalent from './assets/BeTalent.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  //Consulta de API
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/employees/');
      setData(response.data);
      setRecords(response.data);
    } catch (error) {
      console.error("Erro na requisição: ", error);
    }
  };
  useEffect(() => {
    fetchData()
  }, [])
  
  //Formatação de telefone
  const formatPhone = (phone) => {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  //Formatação de data
  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  };

  //Colunas da tabela
  const columns = [
    {
      name: 'Imagem',
      selector: row => row.image,
      sortable: true,
      cell: row => <img src={row.image} alt="Imagem" className='ImgUser' />
    },
    {
      name: 'Nome',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Cargo',
      selector: row => row.job,
      sortable: true
    },
    {
      name: 'Data de admissão',
      selector: row => formatDate(row.admission_date),
      sortable: true
    },
    {
      name: 'Telefone',
      selector: row => formatPhone(row.phone),
      sortable: true
    },
  ];


  // Barra de pesquisa
  const handleFilterName = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const newData = data.filter(row => row.name.toLowerCase().includes(searchTerm) || row.phone.toLowerCase().includes(searchTerm) || row.job.toLowerCase().includes(searchTerm));
    setRecords(newData);
  };

  // Paginação
  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <>
      <div className="container">
        <img src={LogoBeTalent} alt="" className='LogoBetalent' />
        <DataTable
          columns={columns}
          data={records}
          title="Tabela - BeTalent"
          noDataComponent="Nenhum registro encontrado"
          selectableRowsHighlight
          highlightOnHover
          fixedHeader
          pagination
          paginationComponentOptions={paginationComponentOptions}
          subHeader
          subHeaderComponent={<input type='text' placeholder='Pesquise por Nome, Cargo ou Telefone' onChange={handleFilterName} className='FilterHeader' />}
        />
      </div>
    </>
  )
}

export default App
