import React, { useState } from 'react';

import VideosList from '../../components/VideosList';
import SearchInput from '../../components/SearchInput';
import YoutubePlayer from '../../components/YoutubePlayer';
import { searchYoutubeVideos } from '../../services/youtube'
import { Container, Side } from './index.styled';

const App = () => {
  const [query, setQuery] = useState('');
  const [videoId, setVideoId] = useState(null);
  const [videos, setVideos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQueryChange = (event) => setQuery(event.target.value);

  const handleSearchSubmit = async () => {
    try {
      if (query) {
        setLoading(true);
        setVideoId(null);
        const response = await searchYoutubeVideos(query, 20);
        setVideos(response.data.items);
        setLoading(false);
      } else {
        setVideos([]);
      }
    } catch (error) {
      setErrorMessage(error?.response?.data?.error?.message || 'Error.');
      setLoading(false);
    }
  }

  const handleVideoClick = (video) => setVideoId(video.id.videoId);

  return (
    <Container>
      <Side>
        <SearchInput query={query} onQueryChange={handleQueryChange} onSearchSubmit={handleSearchSubmit} />
        {loading && <p>Procurando no YouTube...</p>}
        {errorMessage && !loading && (<p>{errorMessage}</p>)}
        {videos && !!videos.length && !loading && (<VideosList videos={videos} onVideoClick={handleVideoClick} />)}
      </Side>
      <Side>
        {videoId && !loading && (<YoutubePlayer videoId={videoId} />)}
      </Side>
    </Container>
  );
}

export default App;
