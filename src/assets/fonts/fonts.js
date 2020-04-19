import { createGlobalStyle } from 'styled-components';

import ProximaNovaBoldWoff from './ProximaNovaBold.woff';
import ProximaNovaBoldWoff2 from './ProximaNovaBold.woff2';
import ProximaNovaCondensed2Woff from './ProximaNovaCondensed2.woff';
import ProximaNovaCondensed2Woff2 from './ProximaNovaCondensed2.woff2';
import ProximaNovaSemiboldWoff from './ProximaNovaSemibold.woff';
import ProximaNovaSemiboldWoff2 from './ProximaNovaSemibold.woff2';
import ProximaNovaCondensedWoff from './ProximaNovaCondensed.woff';
import ProximaNovaCondensedWoff2 from './ProximaNovaCondensed.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'ProximaNovaBold';
        src: local('ProximaNovaBold'), local('ProximaNovaBold'),
        url(${ProximaNovaBoldWoff2}) format('woff2'),
        url(${ProximaNovaBoldWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'ProximaNovaCondensed2';
        src: local('ProximaNovaCondensed2'), local('ProximaNovaCondensed2'),
        url(${ProximaNovaCondensed2Woff2}) format('woff2'),
        url(${ProximaNovaCondensed2Woff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'ProximaNovaSemibold';
        src: local('ProximaNovaSemibold'), local('ProximaNovaSemibold'),
        url(${ProximaNovaSemiboldWoff2}) format('woff2'),
        url(${ProximaNovaSemiboldWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'ProximaNovaCondensed';
        src: local('ProximaNovaCondensed'), local('v'),
        url(${ProximaNovaCondensedWoff2}) format('woff2'),
        url(${ProximaNovaCondensedWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;