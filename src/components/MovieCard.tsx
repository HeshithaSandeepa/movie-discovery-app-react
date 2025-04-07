
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';


interface Movie {
  url: string,
  title: string,
  release_date: string

}



const MovieCard = ({ url, title, release_date }: Movie) => {

  const OnFavoriteClick = () => {
    alert('clicked');
  }
  return (
    <>
      <Card sx={
        {
          minWidth: 250,
          backgroundColor: '#171717',
          color: 'white',
          m: 1,
        }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={url}
            alt="image"
            sx={{
              height: 160,
              width: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              {release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          onClick={OnFavoriteClick}
          size="small"
          color="primary"
          startIcon={<FavoriteIcon />}
          sx={{ margin: '0.5rem' }}
        >
          Like
        </Button>
      </Card>
    </>
  )
}

export default MovieCard