
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"
import { Grid, Typography } from "@mui/material";
const Favorites = () => {

  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div>
        <div className="favorites-empty" style={{ width: '100%', color: 'white', minHeight: '100vh' }}>
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding movies to your favorites and they weill appear here..</p>
        </div>
      </div>
    )

  } else {

    return (
      <>
        <Typography
          variant="h5"
          sx={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>
          Your Favorite Movies
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {favorites.map((movie: any, index: number) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />

            </Grid>
          ))}
        </Grid>
      </>
    )
  }

}

export default Favorites