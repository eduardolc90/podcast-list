import React from 'react';
import { useHistory } from 'react-router-dom';
import ChapterDetail from '../components/podcast-description/ChapterDetail';
import PodCastDescription from '../components/podcast-description/PodCastDescription';
import { usePodCastsHook } from '../hooks/usePodCastsHook';

const ChapterListPage = ({ id, episodeId }) => {
  const { chaptersList, detail } = usePodCastsHook(id);
  const history = useHistory();

  return (
    <div className='container chapter-list-page'>
      <div className="row">
        <PodCastDescription chaptersList={chaptersList} detail={detail} history={history} id={id} />
        <ChapterDetail chapter={chaptersList.results?.find(it => it.trackId === parseInt(episodeId))} />
      </div>
    </div>
  );
}

export default ChapterListPage;