import $ from 'jquery'
import axios from 'axios'
import {useEffect} from 'react'

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

    useEffect(function(){
        let promise = new Promise(function(success , fail){
            axios.get('https://raw.githubusercontent.com/21929457/ClimbTOP/refs/heads/master/src/data/item.json').then(function(data){
                success(data)
            })
        }).then(function(result){
            result.data.map(function(data){
                items.append(`
                    <div className='item'>
                            
                            <img alt="item_${data.id}"/>
        
                            <div className="btn-wrap">
                                <button type='button' className="info">정보</button>
                                <span></span>
                                <button type='button' className="buy">구매</button>
                            </div>
                            
                            <div className='disc-wrap'>
                                <button type='button' className='closeBtn'></button>
                                <p className='name'>${data.name}</p>
                                <p className='cost'><span>${data.cost}</span>G</p>
                                <span className='line'></span>
                                <p className='disc'>${data.disc}</p>
                            </div>
                        </div>
                    `)
            })
        })
    } , [])
    
    return(
        <div className="contents-view store-contents">

            <div className='items'></div>
            
        </div>
    )
}