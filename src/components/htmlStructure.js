import renderToDom from '../scripts/helpers/renderToDom';
// HTML STUCTURE
const htmlStructure = () => {
  const domString = `<div id="form-container"></div>
  <div id="lyrics-container"></div>`;
  renderToDom('#app', domString);
};

export default htmlStructure;
