import React from 'react';
import { useHistory } from 'react-router-dom';
import PodCastChaptersList from '../components/podcast-description/PodCastChaptersList';
import PodCastDescription from '../components/podcast-description/PodCastDescription';
import { usePodCastsHook } from '../hooks/usePodCastsHook';

const PodcastDetailsPage = ({ id }) => {
  const { chaptersList, detail } = usePodCastsHook(id);
  const history = useHistory();

  return (
    <div className='container '>
      <div className="row">
        <PodCastDescription chaptersList={chaptersList} detail={detail} history={history} id={id} />
        <PodCastChaptersList chaptersList={chaptersList} id={id} history={history} />
      </div>
    </div>
  );
}

export default PodcastDetailsPage;