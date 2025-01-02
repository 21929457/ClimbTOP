import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Intro() {
    let nowLocation = useLocation()
    
    if (nowLocation.pathname === "/Main") return null

    return (
        <div className='intro-wrap'>
            <Link to='/Main' className='start'>시작하기</Link>
        </div>
    )
}