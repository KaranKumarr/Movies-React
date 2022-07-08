import PopularTvShows from "../components/PopularTvShows";
import TopRatedTvShows from "../components/TopRatedTvShows";
import NowOnTheAirShows from '../components/NowOnTheAirShows';
import { motion } from 'framer-motion';

function TvShows() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}>

      <PopularTvShows />
      <TopRatedTvShows />
      <NowOnTheAirShows />
    </motion.div>
  );
}

export default TvShows;