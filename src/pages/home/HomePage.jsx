import React, { useEffect, useState } from "react";
import FeaturedVideo from "../../components/featured-section/FeaturedSection";
import data from '../../data/moviesData.json';
import Carousel from "../../components/carousel/Carousel";
import './home-page.scss';

const HomePage = () => {
    const [highlightedMovie, setHighlightedMovie] = useState(null);
    const [trendingMovies, setTrendingNowData] = useState([]);

    useEffect(() => {
        const viewedMovieIds = JSON.parse(sessionStorage.getItem("viewedMovies")) || [];
        const viewedMovies = viewedMovieIds.map((id) =>
        data.TrendingNow.find((movie) => id === movie.Id)
        );
        const restMovies = data.TrendingNow.filter(
        (movie) => !viewedMovieIds.includes(movie.Id)
        ).sort((a, b) => new Date(b.Date) - new Date(a.Date));
        const trendingMoviesList = [...viewedMovies, ...restMovies].slice(0, 49).map(movie => ({
            ...movie,
            CoverImage: requireImage(movie.CoverImage),
        }));

        setTrendingNowData(trendingMoviesList);
    }, []);

    const requireImage = (imageName) => {
        try {
            return require(`../../assets/images/${imageName}`);
        } catch (error) {
            console.log(`Image not found: ${imageName}`, error);
            return null;
        }
    };
    
    const handleMovieClick = (movie) => {
        const viewedMovieIds = JSON.parse(sessionStorage.getItem("viewedMovies")) || [];
        const updatedViewedMovieIds = [movie.Id, ...viewedMovieIds.filter(id => id !== movie.Id)];

        sessionStorage.setItem("viewedMovies", JSON.stringify(updatedViewedMovieIds));
        setHighlightedMovie(movie);
    };

    const getFeaturedData = (movie) => ({
        ...movie,
        CoverImage: requireImage(movie.CoverImage),
        TitleImage: requireImage(movie.TitleImage),
        Duration: movie.Duration,
    });

    return (
        <div className="home-page">
            <FeaturedVideo 
                data={highlightedMovie ? getFeaturedData(highlightedMovie) : getFeaturedData(data.Featured)}
            />
            <Carousel title={'Trending Now'} items={trendingMovies} onClick={handleMovieClick} />
        </div>
    );
};

export default HomePage;
