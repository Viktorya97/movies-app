import SearchIcon from '../assets/icons/search-icon.png';
import HomeIcon from '../assets/icons/home-icon.png';
import TvShowsIcon from '../assets/icons/tv-shows-icon.png';
import MoviesIcon from '../assets/icons/movies-icon.png';
import GenresIcon from '../assets/icons/genres-icon.png';
import WatchLaterIcon from '../assets/icons/watch-later-icon.png';
import ProfileImage from '../assets/images/Sung-Gi-Hoon.jpg';

export const menuItems = [
    { name: "Search", icon: <img src={SearchIcon} alt={"Search"} /> },
    { name: "Home", icon: <img src={HomeIcon} alt={"Home"} /> },
    { name: "TV Shows", icon: <img src={TvShowsIcon} alt={"TV Shows"} /> },
    { name: "Movies", icon: <img src={MoviesIcon} alt={"Movies"} /> },
    { name: "Genres", icon: <img src={GenresIcon} alt={"Genres"} /> },
    {
        name: "Watch Later",
        icon: <img src={WatchLaterIcon} alt={"Watch Later"} />,
    },
];
  
export const profileInfo = {
    image: ProfileImage,
    name: "Daniel",
    additionalMenuItems: ["Language", "Get Help", "Exit"],
};