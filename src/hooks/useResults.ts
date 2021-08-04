import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import IResult from '../interfaces/IResult';

export default () => {
  const emptyResults: IResult[] = [];
  const [results, setResults] = useState(emptyResults);
  const [errMsg, setErrMsg] = useState('');

  const searchApi = async (query: string) => {
    try {
      console.log('searchApi called');
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: query,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
      console.log(results);
      setErrMsg('');
    } catch (err) {
      console.log(err);
      setErrMsg('Something went wrong');
    }
  };

  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      await searchApi('pasta'); // do a first call to yelp at startup
    }
    anyNameFunction();
  }, []);

  return [searchApi, results, errMsg];
};
