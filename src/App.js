import './App.css'
import $ from 'jquery'
import FightView from './components/FightView'
import Menu from './components/Menu'
import Contents from './components/Contents'

function App() {
  let menu = $('.menu span')
  let contents_view = $('.contents-view')

  menu.each(function(i) {
    menu.eq(i).on('click' , function(){
      contents_view.removeClass('show')
      contents_view.eq(i).addClass('show')
      console.log(1)
    })
  })
  
  return (
    <div id='cont' className="cont bg-contBg py-10">

      <div className='main m-auto bg-mainBg'>
        
        <FightView></FightView>
        
        <Menu></Menu>

        <div className='content-wrap p-5'>
          <Contents></Contents>
        </div>

       </div>
    </div>
  );
}

export default App;
