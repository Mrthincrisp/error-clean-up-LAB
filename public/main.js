import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import htmlStructure from '../components/hstructure';
import header from '../components/header';
import events from '../utils/data/events';
import { startSortingBtn } from '../components/buttons';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
