import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { LocalPhone, WhatsApp, ContactMail, Person } from '@material-ui/icons/LocalPhone';
import './index.css';

const Agenda = props => {
  const { contatos } = props;
  console.log(contatos);
  const content = contatos.map(contato => (
    <Card
      ariant="outlined"
      key={contato.id}
      variant="outlined"
      sx={{
        display: 'flex',
        p: 1,
        flexDirection: {
          xs: 'column', // mobile
          sm: 'row' // tablet and up
        }
      }}
    >
      <Box sx={{ alignSelf: 'center', ml: 2 }}>
        <Typography variant="body2" color="text.secondary">
          <b>{contato.nome}</b>
        </Typography>
        <Typography component="div" fontWeight="bold">
          {contato?.telefone && (
            <p>
              <a className="Contact-Link" href={`tel:${contato?.telefone}`}>
                {contato?.telefone}
              </a>
              <a className="Contact-Link" href={`https://api.whatsapp.com/send?phone=${contato?.telefone}`}>
                Mensagem
              </a>
            </p>
          )}
          {contato?.email && (
            <p>
              <a className="Contact-Link" href={`mailto:${contato?.email}`}>
                {contato?.email}
              </a>
            </p>
          )}
        </Typography>
        <Box
          sx={{
            ml: -1,
            mt: 0.75,
            px: 1,
            py: 0.5,
            borderRadius: 1,
            display: 'flex',
            typography: 'caption',
            bgcolor: theme => (theme.palette.mode === 'dark' ? 'primary.900' : 'primary.50'),
            color: theme => (theme.palette.mode === 'dark' ? '#fff' : 'primary.700')
          }}
        />
      </Box>
    </Card>
  ));
  return <div>{content}</div>;
};

export default Agenda;
