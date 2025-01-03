import $ from 'jquery'
import axios from 'axios'
import {useEffect , useState} from 'react'

export default function Store() {
    let [itemData , setItemData] = useState([])
    let disc = $('.disc-wrap')

    useEffect(function(){
        axios.get('https://raw.githubusercontent.com/21929457/ClimbTOP/refs/heads/master/src/data/item.json').then(function(data){
            setItemData(data.data)
        })
    } , [])
    
    return(
        <div className='items'>
                {
                    itemData.map((data)=>{
                       return(
                            <div className='item' key={data.id}>
                                    
                                <div className='item-img'>
                                    <img src={data.url} alt={data.id}/>
                                </div>

                                <div className="btn-wrap">
                                    <button type='button' className="info" onClick={()=>{disc.eq(data.id).addClass('show')}}>정보</button>
                                    <span></span>
                                    <button type='button' className="buy">구매</button>
                                </div>
                                
                                <div className='disc-wrap'>
                                    <button type='button' className='closeBtn' onClick={()=>{disc.eq(data.id).removeClass('show')}}></button>
                                    <p className='name'>{data.name}</p>
                                    <p className='cost'><span>{data.cost}</span>G</p>
                                    <span className='line'></span>
                                    <p className='disc'>{data.disc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    )
}