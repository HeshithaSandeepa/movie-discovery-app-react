import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMovieContext } from '../contexts/MovieContext';

export interface Movie {
  id: number;
  url: string;
  title: string;
  release_date: string;
  poster_path?: string;


}
interface MovieProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieProps) => {

  const { isFavorite, addToFavorites, removeFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (favorite) removeFavorites(movie.id);
    else addToFavorites(movie)
  };

  return (
    <Card sx={{
      minWidth: 220,
      maxWidth: 220,
      backgroundColor: '#171717',
      color: 'white',
      m: 1,
      overflowY: 'hidden',
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={movie.url}
          alt={movie.title}
          sx={{
            height: 250,
            width: '100%',
            objectFit: 'cover'
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {movie.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            {movie.release_date?.split("-")[0]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        onClick={handleFavoriteClick}
        size="small"
        color={favorite ? "error" : "primary"}
        startIcon={<FavoriteIcon />}
        sx={{ margin: '0.5rem' }}
      >
        Like
      </Button>
    </Card>
  );
};

export default MovieCard;