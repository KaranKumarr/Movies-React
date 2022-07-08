import PopularTvShows from "../components/PopularTvShows";
import TopRatedTvShows from "../components/TopRatedTvShows";
import NowOnTheAirShows from '../components/NowOnTheAirShows';

function TvShows() {
  return (
    <div>
      <PopularTvShows />
      <TopRatedTvShows />
      <NowOnTheAirShows />
    </div>
  );
}

export default TvShows;