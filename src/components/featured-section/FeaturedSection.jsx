import React, { useEffect, useState } from 'react';
import './featured-section.scss';

const FeaturedSection = ({ data }) => {
    const {
        Title,
        CoverImage,
        TitleImage,
        VideoUrl,
        ReleaseYear,
        MpaRating,
        Category,
        Duration,
        Description,
    } =  data;

    const [showTrailer, setShowTrailer] = useState(false);
    const [movieTrailer, setMovieTrailer] = useState(false);

    useEffect(() => {
        if (VideoUrl) {
            setShowTrailer(true);
            setMovieTrailer(null);

            const timer = setTimeout(() => {
                setMovieTrailer(VideoUrl);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [data, VideoUrl]);

    const durationFormat = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        
        return `${hours ? `${hours}h ` : ""}${minutes ? `${minutes}m` : ""}`.trim();
    };      

return (
   <div className={'featured-section'}>
    {!showTrailer && (
    <div
        className={"featured-section__bg"}
        style={{ backgroundImage: `url(${CoverImage})` }}
    />
    )}
    {movieTrailer && (
        <video
            src={VideoUrl}
            className={'featured-section__video'}
            muted
            autoPlay
        />
    )}
    <div className={'featured-section__container'}>
        <div>
            <div className={'featured-section__category'}>{Category}</div>
            <div className={'featured-section__logo'}>
                <img src={TitleImage} alt={Title} />
            </div>
            <div className={'featured-section__details'}>
                <div className={'featured-section__detail-item'}>
                    {ReleaseYear}
                </div>
                <div className={'featured-section__detail-item'}>{MpaRating}</div>
                <div className={'featured-section__detail-item'}>{durationFormat(Duration)}</div>
            </div>
            <div className={'featured-section__description'}>
                {Description}
            </div>
            <div className={'featured-section__buttons'}> 
                <button className={'featured-section__play-btn'}>{'Play'}</button>
                <button className={'featured-section__more-info-btn'}>{'More Info'}</button>
            </div>
        </div>
    </div>
   </div>
  );
};

export default FeaturedSection;
