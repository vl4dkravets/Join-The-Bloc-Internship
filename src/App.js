import React, { useState } from 'react';
import SearchForm from './componenets/Form'
import JobLists from './componenets/JobLists'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')

  //description input handle
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  //location input handle
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  //submit button handle
  const onSubmit = e => {
    e.preventDefault();
    getData();

  }

  //get data from github job API (fetching by description and location)
  const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
  const getData = async () => {
    await axios.get(url)
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <SearchForm
        description={description}
        handleDescriptionChange={handleDescriptionChange}
        location={location}
        handleLocationChange={handleLocationChange}
        onSubmit={onSubmit} />

      {
        posts.map((job) => <JobLists job={job} key={job.id} />)
      }
    </div>
  )
}
export default App;