import React, { useState } from 'react';

import VideosList from '../../components/VideosList';
import SearchInput from '../../components/SearchInput';
import YoutubePlayer from '../../components/YoutubePlayer';
import { searchYoutubeVideos } from '../../services/youtube'
import { Container, Side } from './index.styled';

const App = () => {
  const [query, setQuery] = useState('');
  const [videoId, setVideoId] = useState(null);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleQueryChange = (event) => setQuery(event.target.value);

  const handleSearchSubmit = async () => {
    try {
      const response = await searchYoutubeVideos(query, 20);
      setData(response.data);
    } catch (error) {
      setErrorMessage(error?.response?.data?.error?.message || 'Error.');
    }
  }

  const handleVideoClick = (video) => setVideoId(video.id.videoId);

  return (
    <Container>
      <Side>
        <SearchInput query={query} onQueryChange={handleQueryChange} onSearchSubmit={handleSearchSubmit} />
        {errorMessage && (<p>{errorMessage}</p>)}
        {data && data.items && (<VideosList videos={data.items} onVideoClick={handleVideoClick} />)}
      </Side>
      <Side>
        {videoId && (<YoutubePlayer videoId={videoId} />)}
      </Side>
    </Container>
  );
}

export default App;
