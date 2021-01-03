import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import song from '../assets/song_1.mp3' 


const Player = () => (
  <AudioPlayer
    autoPlay
    src={song}

    // other props here
  />
);

export default Player