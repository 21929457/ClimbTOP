import {useState} from 'react'
import FightView from '../components/FightView'
import UserState from './UserState'
import Village from './Village'
import Store from './Store'

export default function Main() {
    let [gold , setGold] = useState(100)
    let [tab , setTab] = useState(1)
    let tabs = [
        { id: 1, content: <UserState></UserState> },
        { id: 2, content: <Village></Village> },
        { id: 3, content: <Store></Store> }
    ]

    return (
        <>
            <FightView></FightView>
            
            <div className='menu bg-menuBg p-2'>
            <div className="icon-wrap">
                {
                    tabs.map(function(tabItem) {
                        return(
                        <span
                            key={`tab-menu-${tabItem.id}`} 
                            className='p-2 rounded text-btntext font-semibold'
                            onClick={() => {setTab(tabItem.id)}}></span>
                        )
                    })
                }
            </div>
            <p className="gold">보유골드 : {gold}G</p>
       </div>

            <div className='content-wrap p-5'>
                {
                    tabs.map(function(tabItem) {
                    return(
                        <div 
                        className={`contents-view ${tab === tabItem.id ? 'show' : ''}`}
                        key={`content-${tabItem.id}`}>
                            {tabItem.content}
                        </div>
                    )
                    })
                }
            </div>
        </>
    )
}