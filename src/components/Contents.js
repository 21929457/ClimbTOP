import $ from 'jquery'
import {useState , useEffect} from 'react'

import UserState from './UserState'
import Village from './Village'
import Store from './Store'

export default function Contents() {
    let [tab , setTab] = useState(0)
    let menu = $('.icon-wrap span')
    let contentsView = $('.contents-view')

    menu.map(function(i){
        menu.eq(i).on('click' , function(){
            setTab(i)
        })
    })
    useEffect(function(){
        contentsView.removeClass('show')
        contentsView.eq(tab).addClass('show')
    } , [tab])

    console.log(1)
    return(
        <>
            <UserState></UserState>
            <Village></Village>
            <Store></Store>
        </>
    )
}