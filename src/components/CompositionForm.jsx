import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Stack,
  Autocomplete
} from '@mui/material';
import champions from '../db/champions';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const CompositionForm = ({ initialState, onSave, onChange, readonly }) => {
  const [selectedChampionName, setSelectedChampionName] = useState('');
  const [selectedChampions, setSelectedChampions] = useState(
    initialState.champions.map((index) => champions[index]) || []
  );
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [btnSaveDisabled, setBtnSaveDisabled] = useState(true);
  const [compName, setCompName] = useState(initialState.name || '');

  const handleAddChampion = () => {
    const champion = champions.find(
      (c) => c.name === selectedChampionName
    );
    if (champion) {
      if (selectedChampions.length === 5) {
        alert('Máximo de 5 campeões por composição!');
        return;
      }
      setSelectedChampions([...selectedChampions, champion]);
    }
    setSelectedChampionName(null);
  };

  useEffect(() => {
    setBtnDisabled(readonly || !selectedChampionName || selectedChampions.length === 5);
    setBtnSaveDisabled(readonly || selectedChampions.length !== 5 || compName.length < 3);
    onChange && onChange(compName, selectedChampions);
  }, [selectedChampionName, selectedChampions, compName]);

  const handleRemoveChampion = (champion) => {
    setSelectedChampions(selectedChampions.filter((c) => c.name !== champion.name));
  };

  const resetForm = () => {
    setCompName('');
    setSelectedChampions([]);
  };

  const champtionToId = (champ) => {
    return champions.findIndex(c => c.name === champ.name);
  };

  return (
    <Container sx={{ paddingY: '20px' }}>
      <Stack
        direction={{
          sm: 'column',
          md: 'row',
        }}
        sx={{ width: '100%'}}
        justifyContent='space-between'
        alignItems={{
          sm: 'flex-start',
          md: 'center'
        }}
        spacing={{
          xs: '20px',
        }}
      >
        <Typography variant="h4">Criar Composição</Typography>
        <Stack direction='row'
          justifyContent={{
            xs: 'flex-start',
            md: 'flex-end'
          }}
          spacing={2}>
          <TextField
            value={compName}
            onChange={(e) => setCompName(e.target.value)}
            placeholder='Nome da Composição'
          />
          <Button
            variant="contained"
            disabled={btnSaveDisabled}
            onClick={() => onSave && onSave({name: compName, champions: selectedChampions.map(champtionToId)}, resetForm)}
          >Salvar</Button>
        </Stack>
      </Stack>
      <Stack display="flex"
        direction={{
          sm: 'column',
          md: 'row',
        }}
        alignItems={{
          sm: 'flex-start',
          md: 'center'
        }}
        mt={5}
        spacing={{
          xs: '20px',
          md: '20px',
        }}
      >
        <Autocomplete
          options={champions.filter(c => !selectedChampions.find(d => d.name === c.name))}
          getOptionLabel={(champion) => champion.name || ''}
          onChange={(e, champion) => {
            setSelectedChampionName(champion?.name);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Pesquisar campeão" />
          )}
          sx={{ minWidth: '240px' }}
          value={champions.find((c) => c.name === selectedChampionName) || null}
        />
        <Button
          variant='contained'
          onClick={handleAddChampion}
          disabled={btnDisabled}
        >
          <AddIcon />
          <Typography ml={2}>Adicionar</Typography>
        </Button>
      </Stack>
      <List>
        {selectedChampions.map((champion) => (
          <ListItem key={champion.name}>
            <ListItemText
              primary={champion.name}
              secondary={`${champion.type ?? 'Físico'} - ${champion.tags.join(', ')} - ${
                champion.mostPlayedRole ?? 'Top'
              }`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleRemoveChampion(champion)}
                disabled={readonly}
              >
                <CloseIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CompositionForm;