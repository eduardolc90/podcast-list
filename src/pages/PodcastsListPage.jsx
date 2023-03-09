import React, { useState, useEffect } from 'react'
import PodcastCard from '../components/podcast-card/PodcastCard';
import { usePodCastsHook } from "../hooks/usePodCastsHook";

export const URL_PODCAST_LIST = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

const PodcastsListPage = () => {
  const { data } = usePodCastsHook();
  const [values, setValues] = useState([]);

  useEffect(() => setValues(data?.entry || []), [data]);

  const onFilter = (filters) => {
    const results = data.entry.filter(it => it.title.label.indexOf(filters) === 0);
    setValues(results);
  };
  return (
    <div className='container podcasts-list-container'>
      <div className="row podcasts-list-container__search">
        <div className="input-group">
          <div className="form-outline">
            <input className="form-control" onKeyUp={(e) => onFilter(e.target.value)} />
          </div>
        </div>
      </div>
      <div className='row'>
        {values.map((it, index) => <PodcastCard key={index} podcasts={it} />)}
      </div>
    </div>
  );
}

export default PodcastsListPage;