import $ from 'jquery'
import UserState from './UserState'
import Village from './Village'
import Store from './Store'

export default function Contents() {
    let menu = $('.menu .icon-wrap span')
    let contents_view = $('.contents-view')
    
    menu.each(function(i) {
        menu.eq(i).on('click' , function(){
            contents_view.removeClass('show')
            contents_view.eq(i).addClass('show')
            // console.log(1)
        })
    })
    return(
        <>
            <UserState></UserState>
            <Village></Village>
            <Store></Store>
        </>
    )
}