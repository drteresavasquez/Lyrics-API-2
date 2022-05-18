import lyricsOnDom from './lyricsOnDom';

const events = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputArtist = document.querySelector('#artist').value;
    const inputSong = document.querySelector('#song').value;
    lyricsOnDom(inputArtist, inputSong);

    form.reset();
  });
};

export default events;
