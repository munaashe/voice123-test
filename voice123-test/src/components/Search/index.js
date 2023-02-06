import React from 'react'
import { makeStyles } from '@mui/styles';
import { Button, Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setVoiceActors } from '../../redux/actions/'
import axios from 'axios';


const useStyles = makeStyles({
  root: {
    paddingTop: '24px',
    margin: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
});

function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = React.useState('');

  const fetchVoiceActors = async () => {
    const response = await axios
      .get(`https://api.sandbox.voice123.com/providers/search/?service=voice_over&keywords=${searchParam}&page=1`)
      .catch((err) => {
        console.log('Err:', err);
      });
    dispatch(setVoiceActors(response.data.providers));
  };

  const handleSearch = React.useCallback(() => {
    fetchVoiceActors()
  }, [fetchVoiceActors])

  React.useEffect(() => {
    handleSearch();
  }, [handleSearch]);


  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={() => handleSearch}>
      <Grid container maxWidth='sm' justifyItems='center' display='flex' alignItems='center'>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearchParam(e.target.value)}
          style={{ marginRight: '10px', borderRadius: '8px', flex: 1 }} />
        <Button variant="contained" color="primary" style={{ borderRadius: '8px', height: '40px' }} >
          Search
        </Button>
      </Grid>
    </form>
  );
}

export default Search



