import React from 'react'
import { makeStyles } from '@mui/styles';
import { Button, Grid, TextField } from '@mui/material';


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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container maxWidth='sm' justifyItems='center' display='flex' alignItems='center'>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          style={{ marginRight: '10px', borderRadius: '8px', flex: 1 }} />
        <Button variant="contained" color="primary" style={{ borderRadius: '8px', height: '40px' }} >
          Search
        </Button>
      </Grid>
    </form>
  );
}

export default Search



