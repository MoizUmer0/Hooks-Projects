
import './App.css'
import { Auto } from './components/Autocomplition-with-api'
import { GitHubFinder } from './components/Git hub finder/insex'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import { Weather } from './weather app'

function App() {
 

  return (
   <>
    
    {/* <RandomColor/>
    <StarRating noOfStars = {10}/>
    <Weather/> */}
    <GitHubFinder/>
    {/* <Auto/> */}
   </>
  )
}

export default App
