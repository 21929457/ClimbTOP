import {useState} from 'react'

export default function FightView() {
    let [floor , setFloor] = useState(1)
    
    return(
        <div className='fight-view'>
            <div className='monster-hp-wrap px-20'>
                <div className='monster-hp bg-red-500'></div>
                <div className='monster-hp-text'><span className='current text-sm font-semibold'>100</span> / <span className='total text-sm font-semibold'>100</span></div>
            </div>
            <div className='user'>
                <img></img>
            </div>
            <div className='monster'>
                <img></img>
            </div>
            <p className="floor"><span>{floor} 층</span></p>
       </div>
    )
}