import {useState} from 'react'
import FightView from '../components/FightView'
import Menu from '../components/Menu'
import Contents from '../components/Contents'

export default function Main() {
    let [gold , setGold] = useState(90)

    return (
        <>
            <FightView></FightView>
            
            <Menu gold={gold}></Menu>

            <div className='content-wrap p-5'>
                <Contents></Contents>
            </div>
        </>
    )
}