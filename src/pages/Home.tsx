import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from '../services/api';
import MovieCard from "../components/MovieCard";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Load popular movies on mount
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Handle search on form submit
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) return;

    try {
      setLoading(true);
      const results = await searchMovies(search);
      setMovies(results);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Search failed");
    } finally {
      setLoading(false);

    }
  };

  return (
    <>
      {/* Search Box */}
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 }, alignItems: 'center', textAlign: 'center' }}
        noValidate
        autoComplete="off"
        onSubmit={handleSearch}
      >
        <TextField
          sx={{
            width: '30ch',
            '& .MuiInputBase-root': {
              height: '45px',
              backgroundColor: '#303030',
              color: 'white',
            },
            '& input::placeholder': { color: 'white' },
            '& .MuiInputLabel-root': { color: '#7e7676' },
            '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: '303030' },
          }}
          size="small"
          id="outlined-basic"
          label="Search For Movies ..."
          variant="outlined"
          value={search}
          onChange={handleChange}
        />
        <Button variant="contained" color="success" size="large" type="submit">
          Search
        </Button>
      </Box>

      {/* Status Messages */}
      {loading && <p style={{ textAlign: 'center', color: "white" }}>Loading movies...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      {/* Movie Grid */}
      <Grid container spacing={2} justifyContent="center">
        {movies.map((movie: any, index: number) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <MovieCard
              title={movie.title}
              release_date={movie.release_date}
              url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}

            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
