import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import './App.css';
import Bio from './components/Bio/Bio';

function App() {

  const [info, setInfo] = useState([])

  const setup = async () => {
    try {
      const {data} = await axios.get('https://api.github.com/users/piresdanyllo')
      setInfo(data)
    } catch (error) {
      console.log(error)
    }
   }
    useEffect(() => {
      setup()
    },[])

    const created = info.created_at
    const createdFormatted = moment(created).format("DD/MM/YYYY")
    console.log(created)
    console.log(createdFormatted)

  return (
    <div>
      <Bio imgUrl={info.avatar_url} name={info.name} bio={info.bio} location={info.location} company={info.company} created={createdFormatted} url={info.html_url} repos={info.public_repos} followers={info.followers} following={info.following}/>
    </div>
  );
}

export default App;
