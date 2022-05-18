import getLyrics from '../api/getLyrics';
import renderToDom from './helpers/renderToDom';

// UI PRESENTATION (HTML ON THE DOM)
const lyricsOnDom = (artist, song) => {
  // this is a promise
  getLyrics(artist, song).then((response) => {
    renderToDom('#lyrics-container', response.lyrics);
  });
};

export default lyricsOnDom;
