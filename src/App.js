import './App.css'
import Main from './components/Main'
import Intro from './components/Intro'
import { Route , Routes} from 'react-router-dom'

function App() {

  return (
    <div id='cont' className="cont bg-contBg py-10">
      <div className='main m-auto bg-mainBg'>
        <Intro></Intro>
        <Routes>
          <Route path='/Main' element={<Main></Main>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;