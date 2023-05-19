import React, {useEffect,useState} from 'react'

function App() {
  const [movies,setMovies] = useState([])
  const [movieName,setMovieName] = useState('hulk')
  const Api_Url = 'http://www.omdbapi.com?apikey=ecb97987'
  const searchMovies = async (title)=>
  {
    const data = await fetch(`${Api_Url}&s=${title}`)
    const movieData = await data.json()
    console.log(movieData.Search)
    if(movieData.Search)
    {
      setMovies(movieData.Search)
    }
  }

  useEffect(()=>
  {
    searchMovies(movieName)
  },[movieName])

  const list = movies.map((ele,index)=>{
    return (
     <p key={index} className='li'>
        <img src={ele.Poster} alt="Poster of Movie" />
        <h2>{ele.Title}</h2>
        <h3>{ele.Year}</h3>
      </p>
    )
  })



  const handleChange = (e)=>
  {
    setMovieName(e.target.value)
  }

  const handleSubmit = (e)=>
  {
    e.preventDefault();
    setMovieName('')
  }
  return (
    <div className='main'>
      <h1 style={{color:'RED'}}>MoviesVerse</h1>
      <div className='form'>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange = {handleChange} value={movieName} className='ip'/>
        <button type='submit' className='btn'>Search</button>
      </form>
      </div>

      <div className='Movies'>
        {list}
        </div>

      </div>
  )
}

export default App