import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Job from './Components/Job/Job'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Value from './Components/Value/Value'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App
