import React from 'react'
import Leaderboard from './components/Leaderboard/Leaderboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path='/' element={ <Leaderboard/>} />
          <Route path='/leaderboard' element={ <Leaderboard/>} />
          <Route path='/admin' element={ <Dashboard/>} />

        </Routes>

   </Router>
    </> */}
      <Leaderboard/>
      </>
  )
}

export default App