import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLocation,BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './style.css'
import Homepage from './Homepage'
import MenuList from './MenuList'
import Items from './items'
import ListItem from './ListItem';

function App() {
  useEffect(() =>{
    AOS.init({
      duration:800,
      offset:100,
      easing:'ease',
      once:true
    })
  },[])  


  return (
    <>
        
                
              <Router  basename='/Sv'>
                <Routes >
                      <Route path='/' element={<Homepage />} />
                      <Route path='/home' element={<Homepage />} />
                      <Route path='/Listitems' element={<ListItem />}/>
                      <Route path='/item' element={<Items />}/>
                      <Route path='/Menulist' element={<MenuList />}/>
                  </Routes>
               
                
                </Router>
            
    </>
  )
}

export default App
