
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
    <div className="movie-card">
      <div className="movie-poster">
        <img src={url} alt={title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={OnFavoriteClick}>Button</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard