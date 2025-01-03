import {useState} from 'react'

export default function FightView() {
    let [level , setLevel] = useState(1)
    return(
        <div className='fight-view'>
            <div className='monster-hp-wrap px-20'>
                <div className='monster-hp bg-red-500'></div>
                <div className='monster-hp-text'><span className='current text-sm font-semibold'>100</span> / <span className='total text-sm font-semibold'>100</span></div>
            </div>
            <p className="level">Lv.<span>{level}</span></p>
       </div>
    )
}