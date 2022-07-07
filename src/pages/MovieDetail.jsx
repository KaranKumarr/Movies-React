import React, { useEffect } from 'react';
import { HiStar } from 'react-icons/hi';
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../data/moviesApiCall';

function MovieDetail() {

  let params = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {

    const fetchDetails = async () => {
      const movie = await getMovieDetails(params.movieId);
      setDetails(movie);
    };

    fetchDetails();

  }, [params.movieId]);


  // Release Date Formatting
  let _resultDate = details.release_date;
  if (details.release_date) {
    let date = new Date(details.release_date);
    let options = { year: 'numeric', month: 'short', day: '2-digit' };
    _resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
  }




  return (
    <DetailedWrapper>
      <img
        src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} alt={details.title}
      />
      <Info>
        <h1>
          {details.title}
          {
            details.status === 'Released' ?
              (
                <span>
                  <HiStar />
                  {details.vote_average}
                </span>
              ) :
              (
                <span>

                </span>
              )
          }
        </h1>
        <h5>

          <span>

            {details.genres ? (
              details.genres.map((genre) => {
                return (
                  <span key={genre.id}>
                    {`${genre.name} `}
                  </span>
                );
              })) : (
              <span></span>
            )
            }

            {` •  ${details.runtime}min • ${_resultDate} • ${details.original_language}`}
          </span>
        </h5>
        <p>
          {details.overview}
        </p>

      </Info>
      <Gradient />
    </DetailedWrapper>
  );
}

const DetailedWrapper = styled.div`
  /* width: 100vw;
  max-width: 100vw;
  max-height: 90vh; */
  min-height: 90vh;
  height: 100%;
  min-width: 90vw;
  position: relative;
  img{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  svg{
    color: #F5C518;
    margin: 0 0.25rem;
  }
`;

const Info = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0 ;
  margin: 1rem;
  h1{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Orbitron', 'Limelight', cursive;
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    text-align: start;
    margin: 1rem 0;
  }
  h1 span{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 100;
    margin-left: 0.5rem;
    letter-spacing: 0;
    font-size: 1.5rem;
  }
  h5{
    font-size: 1rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    opacity: 90%;
  }
  p{
    margin: 1rem 0;
    opacity: 90%;
    font-weight: 100;
  }
`;


const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.75));
`;


export default MovieDetail;
