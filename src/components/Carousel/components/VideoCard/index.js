import React from 'react';
import { useHistory } from 'react-router-dom'
import { VideoCardContainer } from './styles';
import json from '../../../../data/watch.json';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  const videoId = videoURL.substr(32,42);
  const history = useHistory();
  const navigateTo = () => {
    json.id = videoId;
    history.push('/watch')
  };

  return (
    <VideoCardContainer
      url={image}
      onClick={navigateTo}
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >

      
    </VideoCardContainer>
  );
}

export default VideoCard;


// import React from 'react';
// import PropTypes from 'prop-types';
// import VideoCardContainer from './styles';

// function getYouTubeId(youtubeURL) {
//   return youtubeURL.replace(
//     /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//     '$7'
//   );
// }

// function VideoCard({ videoTitle, videoURL, categoryColor }) {
//   const image = `https://img.youtube.com/vi/${getYouTubeId(
//     videoURL
//   )}/hqdefault.jpg`;
//   return (
//     <VideoCardContainer
//       url={image}
//       href={videoURL}
//       target="_blank"
//       style={{ borderColor: categoryColor || 'red' }}
//       title={videoTitle}
//     />
//   );
// }

// VideoCard.propTypes = {
//   videoTitle: PropTypes.string.isRequired,
//   videoURL: PropTypes.string.isRequired,
//   categoryColor: PropTypes.string.isRequired,
// };

// export default VideoCard;




// import React from 'react';
// import { VideoCardContainer } from './styles';

// function getYouTubeId(youtubeURL) {
//   return youtubeURL
//     .replace(
//       /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//       '$7',
//     );
// }


// function VideoCard({ videoTitle, videoURL, categoryColor }) {
//   const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
//   return (
//     <VideoCardContainer
//       url={image}
//       href={videoURL}
//       target="_blank"
//       style={{ borderColor: categoryColor || 'red' }}
//       title={videoTitle}
//     />
//   );
// }

// export default VideoCard;
