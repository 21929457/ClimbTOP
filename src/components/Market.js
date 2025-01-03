import $ from 'jquery'
import axios from 'axios'
import {useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { payGold } from '../store'

export default function Market() {
    let [itemData , setItemData] = useState([])
    let disc = $('.disc-wrap')
    let buyBtn =$('.buy')
    let equipBtn = $('.equip')
    let gold = useSelector(state=>{return state})
    let dispatch = useDispatch()

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
                                    <button type='button' className="buy" onClick={()=>{
                                        if(gold.gold >= data.cost) {
                                            dispatch(payGold(data.cost))
                                            buyBtn.eq(data.id).addClass('hide')
                                            equipBtn.eq(data.id).addClass('show')
                                        } else {
                                            alert('골드가 부족합니다')
                                        }
                                    }}>구매</button>
                                    <button type='button' className="equip">장착</button>
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