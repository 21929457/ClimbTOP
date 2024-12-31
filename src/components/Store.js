import $ from 'jquery'
import axios from 'axios'

export default function Store() {
    let buyBtn = $('.info')
    let closeBtn = $('.closeBtn')
    let disc = $('.disc-wrap')
    let items = $('.items')

    buyBtn.on('click' , function(){
        disc.addClass('show')
    })
    closeBtn.on('click' , function(){
        disc.removeClass('show')
    })

    axios.get('https://raw.githubusercontent.com/21929457/ClimbTOP/refs/heads/master/src/data/item.json').then(function(data){
        data.data.forEach(function(e){
            items.append(`
                <div className='item'>
                 <img alt="item_1"/>
                 <div className="btn-wrap">
                     <button type='button' className="info">정보</button>
                     <span></span>
                     <button type='button' className="buy">구매</button>
                 </div>
                 <div className='disc-wrap'>
                     <button type='button' className='closeBtn'></button>
                     <p className='name'>${e.name}</p>
                     <p className='cost'><span>${e.cost}</span>G</p>
                     <span className='line'></span>
                     <p className='disc'>${e.disc}</p>
                 </div>
             </div>
            `)
        })
    }).catch(function(){

    })
    return(
        <div className="contents-view store-contents ">
            <div className='items'></div>
        </div>
    )
}