import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactMail from '@material-ui/icons/ContactMail';
import Agenda from './components/Contato';
import './App.css';

const App = () => {
  const [value, setValue] = React.useState(0);
  const [contatos, setContatos] = useState([]);
  // const ListaPadrao = contatos.map(contato => {
  //   return contato.nome.toUpperCase();
  // });

  const handleChange = (event, newTab) => {
    if (newTab === 0) {
      setContatos([
        { id: '1', nome: 'Bruno1', telefone: '(42) 9999 3333' },
        { id: '2', nome: 'Bruno2', telefone: '(42) 8888 9933' },
        { id: '3', nome: 'Bruno3', telefone: '(42) 4433 9988' }
      ]);
      setValue(0);
    } else {
      setContatos([
        { id: '1', nome: 'Bruno1', email: 'email@emaisl1.com.br' },
        { id: '2', nome: 'Bruno2', email: 'email@emaisl2.com.br' },
        { id: '3', nome: 'Bruno3', email: 'email@emaisl3.com.br' }
      ]);
      setValue(1);
    }
  };

  return (
    <div className="container">
      <h2>Lista de contatos</h2>
      <Paper
        square
        style={{
          flexGrow: 1
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab icon={<PhoneIcon />} aria-label="Telefone" />
          <Tab icon={<ContactMail />} aria-label="Emails" />
        </Tabs>
        <Agenda contatos={contatos} />
      </Paper>
    </div>
  );
};

export default App;
