import React, { useState } from 'react';

import Header from '../../components/Header';
import VideosList from '../../components/VideosList';
import SearchInput from '../../components/SearchInput';
import YoutubePlayer from '../../components/YoutubePlayer';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import NotFoundMessage from '../../components/NotFoundMessage';
import GlobalFonts from '../../assets/fonts/fonts';
import { searchYoutubeVideos } from '../../services/youtube'
import { GlobalStyle, Content, Container, LeftSide, RightSide } from './index.styled';

const App = () => {
  const [query, setQuery] = useState('');
  const [videoId, setVideoId] = useState(null);
  const [videos, setVideos] = useState(null);
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
    <Content>
      <GlobalFonts />
      <GlobalStyle />
      <Header>
        <SearchInput query={query} onQueryChange={handleQueryChange} onSearchSubmit={handleSearchSubmit} />
      </Header>
      <Container>
        <LeftSide>
          {loading && <Loading />}
          {errorMessage && !loading && <ErrorMessage message={errorMessage} />}
          {videos && !!videos.length && !loading && <VideosList videos={videos} onVideoClick={handleVideoClick} />}
          {videos && !videos.length && !loading && <NotFoundMessage />}
        </LeftSide>
        <RightSide>
          {videoId && !loading && (<YoutubePlayer videoId={videoId} />)}
        </RightSide>
      </Container>
    </Content>
  );
}

export default App;
