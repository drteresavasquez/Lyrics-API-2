import htmlStructure from '../components/htmlStructure';
import formOnDom from './components/form';
import events from './events';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const startApp = () => {
  htmlStructure();
  formOnDom();
  events();
};

startApp();
