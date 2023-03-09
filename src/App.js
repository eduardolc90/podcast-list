import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PodcastsListPage from './pages/PodcastsListPage';
import Header from './components/header/Header';
import PodcastDetailsPage from './pages/PodcastDetailsPage';
import ChapterListPage from './pages/ChapterListPage';

const App = () => (
  <div className='app-container'>
    <Router>
      <Header />
      <Route exact path="/podcast/:id/episode/:episodeId" render={(props) => <ChapterListPage id={props.match.params.id} episodeId={props.match.params.episodeId} />} />
      <Route exact path="/podcast/:id" render={(props) => <PodcastDetailsPage id={props.match.params.id} />} />
      <Route exact path="/" render={() => <PodcastsListPage />} />
    </Router>
  </div>
);

export default App;
