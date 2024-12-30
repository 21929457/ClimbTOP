export default function Menu(props) {
    return(
        <div className='menu bg-menuBg p-2'>
            <div className="icon-wrap">
                <span className='p-2 rounded text-btntext font-semibold'></span>
                <span className='p-2 rounded text-btntext font-semibold'></span>
                <span className='p-2 rounded text-btntext font-semibold'></span>
            </div>
            <p className="gold">보유골드 : {props.gold}G</p>
       </div>
    )
}