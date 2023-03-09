import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_PODCASTS } from "../store/actions";

export const URL_PODCAST_LIST = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
export const URL_PODCAST_DETAIL = "https://itunes.apple.com/lookup?media=podcast&entity=podcastEpisode&limit=20";

export const usePodCastsHook = (id) => {
  const [data, setData] = useState({});
  const [chaptersList, setChaptersList] = useState({});
  const [detail, setDetail] = useState({});

  const podcastData = useSelector((state) => state.podcastData);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      fetch(URL_PODCAST_LIST)
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: SAVE_PODCASTS,
            payload: { podcastData: data.feed },
          }))
    };
    if (!podcastData.entry) {
      fetchData();
    }
  }, [dispatch, podcastData]);

  useEffect(() => setData(podcastData), [podcastData]);

  useEffect(() => {
    async function fetchData(id) {
      fetch(`${URL_PODCAST_DETAIL}&id=${id}`)
        .then(response => response.json())
        .then(data => setChaptersList(data))
    };
    id && fetchData(id);
  }, [id]);

  useEffect(() => {
    if (data.entry) {
      const podCast = data.entry.find(it => it.id.attributes["im:id"] === id);
      setDetail(podCast);
    }
  }, [data, id]);

  return {
    data,
    chaptersList,
    detail,
  };
}