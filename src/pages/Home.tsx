import { useState } from "react";
import MovieCard from "../components/MovieCard";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const Home = () => {
  const [search, setSearch] = useState<string>("");


  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Harry Potter", release_date: "2019" },
    { id: 3, title: "Back hawk Down", release_date: "2024" },
    { id: 4, title: "GTA", release_date: "2020" },
    { id: 5, title: "MTA", release_date: "2007" },
    { id: 6, title: "MTA", release_date: "2007" },
    { id: 7, title: "MTA", release_date: "2007" },
    { id: 8, title: "MTA", release_date: "2007" },
    { id: 9, title: "MTA", release_date: "2007" },
    { id: 10, title: "MTA", release_date: "2007" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(search);
    setSearch("");
  }

  return (
    <>
      {/* search box start */}
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 }, alignItems: 'center', textAlign: 'center' }}
        noValidate
        autoComplete="off"
        onSubmit={handleSearch}
      >
        {/* search box  start*/}
        <TextField
          sx={{
            width: '30ch',
            '& .MuiInputBase-root': {
              height: '45px',
              alignItems: 'center',
              backgroundColor: '#303030',
              color: 'white'
            },
            '& input::placeholder': {
              color: 'white',

            },
            '& .MuiInputLabel-root': {
              color: '#7e7676', // Label color when not focused
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', // Label color when focused
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '303030',
            },
          }}
          size="small"
          id="outlined-basic"
          label="Search For Movies ..."
          variant="outlined"
          value={search}
          onChange={handleChange}

        />
        {/* search box ends */}
        {/* search button */}
        <Button variant="contained" color="success" size="large">Search</Button>
      </Box>

      {/* search box ends */}

      <Grid container spacing={2} justifyContent="center">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(search.toLowerCase()) && (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} >
              <MovieCard
                key={movie.id}
                title={movie.title}
                release_date={movie.release_date}
                url="https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png"
              />
            </Grid>
          )))
        }
      </Grid>
    </>
  )
}

export default Home;