import React, { useState } from 'react';

import { Container, Side } from './index.styled';
import YoutubePlayer from '../../components/YoutubePlayer/index';
import VideosList from '../../components/VideosList/index';
import SearchInput from '../../components/SearchInput/index';

const response = {
  "kind": "youtube#searchListResponse",
  "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/ONfhTxlhUYgu13zof-619pMk0ho\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "BR",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/wzHUwlx7bbda4Rn6haKk3N2lP_A\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "KM3j_TXeqfc"
      },
      "snippet": {
        "publishedAt": "2020-02-07T15:00:09.000Z",
        "channelId": "UCiA9R5n9sR06RgGGigkY5RA",
        "title": "The Pussycat Dolls - React",
        "description": "REACT is out everywhere! https://PussycatDolls.lnk.to/React Follow Pussycat Dolls: Instagram: https://www.instagram.com/pussycatdolls Facebook: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/KM3j_TXeqfc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/KM3j_TXeqfc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/KM3j_TXeqfc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ThePussycatDollsVEVO",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/-yHpv212Ykxa7r0jPtFcxitj_3M\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "DQXKxIYKTlk"
      },
      "snippet": {
        "publishedAt": "2020-04-17T01:39:42.000Z",
        "channelId": "UC8rc4LEymAfWQMx1diQlaXA",
        "title": "Jhony REACT - GLOCKADA- NGC Daddy",
        "description": "Satisfação, Jhony MC ( Piei) . . - Ouça QUEBRA no link a baixo: https://youtu.be/6vxz97vBcjQ - Assista o clip original no link a baixo: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DQXKxIYKTlk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DQXKxIYKTlk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DQXKxIYKTlk/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "McJhony",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/Bncf1yEO0JWPINvKB8wII1inEx4\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "wZiZyduy8TI"
      },
      "snippet": {
        "publishedAt": "2020-04-17T02:16:04.000Z",
        "channelId": "UClTDRDn_pe6paLX05viZLyw",
        "title": "Hungria Hip Hop - Made in Favela (Prod. Lerym) [React]",
        "description": "Made in favela - https://youtu.be/TaChAVNEDPU Segue nos lá @falatuzetre @7juliao7 Falatuzetre@gmail.com // manda os trampo bolado! #React #Original ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wZiZyduy8TI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wZiZyduy8TI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wZiZyduy8TI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FALATUZETRÊ",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"nxOHAKTVB7baOKsQgTtJIyGxcs8/gy7jGrBa3N5LmDYnadq7VxospGQ\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "Wyk01ySxg0A"
      },
      "snippet": {
        "publishedAt": "2020-04-16T22:06:06.000Z",
        "channelId": "UCsFrt8oKNYXGspSlX9u6uXw",
        "title": "React Summit - Remote Edition, Main track HD",
        "description": "Live stream of the React Summit - Remote Edition main track https://remote.reactsummit.com See conference website for agenda and more details.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Wyk01ySxg0A/default_live.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Wyk01ySxg0A/mqdefault_live.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Wyk01ySxg0A/hqdefault_live.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "GitNation React Conferences",
        "liveBroadcastContent": "live"
      }
    }
  ]
};

const App = () => {
  const [videoId, setVideoId] = useState('');
  const handleVideoClick = (video) => setVideoId(video.id.videoId);

  return (
    <Container>
      <Side>
        <SearchInput />
        <VideosList videos={response.items} handleVideoClick={handleVideoClick} />
      </Side>
      <Side>
        {videoId && (<YoutubePlayer videoId={videoId} />)}
      </Side>
    </Container>
  );
}

export default App;