import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Harry Potter", release_date: "2019" },
    { id: 3, title: "Back hawk Down", release_date: "2024" },
    { id: 4, title: "GTA", release_date: "2020" },
    { id: 5, title: "MTA", release_date: "2007" },
  ];

  const handleSearch = () => {

  }


  return (
    <div className='home'>
      <form action="" onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input" />

        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            url="https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png"

          />
        ))
        }
      </div>

    </div>
  )
}

export default Home;