import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../styles/Home.css";

import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import film2 from "../assets/images/film2.png";
import film3 from "../assets/images/film3.png";
import film4 from "../assets/images/film4.png";
import film5 from "../assets/images/film5.png";
import film6 from "../assets/images/film6.png";
import film7 from "../assets/images/film7.png";
import film8 from "../assets/images/film8.png";
import film9 from "../assets/images/film9.png";
import film10 from "../assets/images/film10.png";
import film11 from "../assets/images/film11.png";
import film12 from "../assets/images/film12.png";
import film13 from "../assets/images/film13.png";
import film14 from "../assets/images/film14.png";
import film15 from "../assets/images/film15.png";
import film16 from "../assets/images/film16.png";
import film17 from "../assets/images/film17.png";

function Home() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      image: film2,
      title: "Don't Look Up",
      rating: "4.5",
      variant: "landscape",
    },
    {
      id: 2,
      image: film3,
      title: "All Of Us Are Dead",
      rating: "4.2",
      variant: "landscape",
    },
    {
      id: 3,
      image: film4,
      title: "Blue Lock",
      rating: "4.6",
      variant: "landscape",
    },
    {
      id: 4,
      image: film5,
      title: "A Man Called Otto",
      rating: "4.4",
      variant: "landscape",
    },
    {
      id: 5,
      image: film6,
      title: "Suzume",
      badge: {
        type: "new-episode",
        text: "Episode Baru",
      },
      variant: "portrait",
      
    },
    {
      id: 6,
      image: film7,
      title: "Jurassic World Dominion",
    },
    {
      id: 7,
      image: film8,
      title: "Sonic The Hedgehog 2",
    },
    {
      id: 8,
      image: film9,
      title: "All of Us Are Dead",
      badge: {
        type: "new-episode",
        text: "Episode Baru",
      },
      variant: "portrait",
    },
    {
      id: 9,
      image: film10,
      title: "Big Hero 6",
      variant: "portrait",
    },
    {
      id: 10,
      image: film11,
      title: "The Tomorrow War",
      badge: {
        type: "top-ten",
        text: "Top 10",
        },
      variant: "portrait",
    },
    {
      id: 11,
      image: film12,
      title: "Ant Man and the Wasp: Quantumania",
      badge: {
        type: "top-ten",
        text: "Top 10",
      },
      variant: "portrait",
    },
    {
      id: 12,
      image: film13,
      title: "Guardians of the Galaxy Vol. 3",
      badge: {
        type: "top-ten",
        text: "Top 10",
      },
      variant: "portrait",
    },
    {
      id: 13,
      image: film14,
      title: "A Man Called Otto",
      badge: {
        type: "top-ten",
        text: "Top 10",
      },
      variant: "portrait",
    },
    {
      id: 14,
      image: film15,
      title: "The Little Mermaid",
      badge: {
        type: "top-ten",
        text: "Top 10",
      },
      variant: "portrait",
    },
    {
      id: 15,
      image: film16,
      title: "Duty After School",
      badge: {
        type: "new-episode",
        text: "Episode Baru",
      },
      variant: "portrait",
    },
    {
      id: 16,
      image: film17,
      title: "Missing",
      variant: "portrait",
    },
  ]);
  const [search, setSearch] = useState("");
  const [myList, setMyList] = useState([]);
  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  function updateSearchMovie(id, newRating) {
  if (!resumeIds.includes(id)) {
    return;
  }

  updateMovie(id, newRating);
  };
  function addToMyList(movie) {
    setMyList((prevMyList) => {
      const alreadyExists = prevMyList.some(
        (item) => item.id === movie.id
      );

      if (alreadyExists) {
        return prevMyList;
      }

      return [...prevMyList, movie];
    });
  }
  function removeFromMyList(movieId) {
    setMyList((prevMyList) =>
      prevMyList.filter((movie) => movie.id !== movieId)
    );
  };
  function updateMovie(id, newRating) {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id
          ? { ...movie, rating: newRating }
          : movie
      )
    );

    setMyList((prevMyList) =>
      prevMyList.map((movie) =>
        movie.id === id
          ? { ...movie, rating: newRating }
          : movie
      )
    );
  };
  function isMovieInMyList(movie) {
    return myList.some((item) => item.id === movie.id);
  };

  const resume = movies.slice(0, 4);
  const topRating = movies.slice(4, 9);
  const trending = movies.slice(9, 14);
  const newRelease = [movies[13], movies[14], movies[8], movies[7], movies[15]];

  const resumeIds = resume.map((movie) => movie.id);
  return (
    <div className="home">
      <Navbar 
        search={search}
        setSearch={setSearch}
      />

      {search ? (
        <MovieSection 
        title="Search Result"
        movies={filteredMovies}
        onAdd={addToMyList}
        onUpdate={updateSearchMovie}
        canUpdate={(movie) => resumeIds.includes(movie.id)}
        isInMyList={isMovieInMyList}
        />
      ) : (
        <>
        <Hero />
        {myList.length > 0 && (
        <MovieSection 
        title="Filmku"
        movies={myList}
        onDelete={removeFromMyList}
        />
        )}
        <MovieSection 
        title="Melanjutkan Nonton" 
        movies={resume}
        onAdd={addToMyList}
        onUpdate={updateMovie}
        isInMyList={isMovieInMyList}
        />
        <MovieSection 
        title="Top Rating" 
        movies={topRating}
        onAdd={addToMyList}
        isInMyList={isMovieInMyList} 
        />
        <MovieSection 
        title="Trending" 
        movies={trending}
        onAdd={addToMyList}
        isInMyList={isMovieInMyList} 
        />
        <MovieSection 
        title="New Release" 
        movies={newRelease}
        onAdd={addToMyList}
        isInMyList={isMovieInMyList} 
        />
      </>
    )}
      <Footer />
    </div>
  );
}

export default Home;
