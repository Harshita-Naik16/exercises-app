export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '24764fdb7amsh5ac77f9a5eb3d9fp1baa3cjsn9d5be5d7eac2',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const url = 'https://youtube-search-and-download.p.rapidapi.com/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw';

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '24764fdb7amsh5ac77f9a5eb3d9fp1baa3cjsn9d5be5d7eac2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}