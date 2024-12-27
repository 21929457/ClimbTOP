export default function FightView() {
    return(
        <div className='fight-view'>
            <div className='monster-hp-wrap px-20'>
            <div className='monster-hp bg-red-500'></div>
            <div className='monster-hp-text'><span className='current text-sm font-semibold'>100</span> / <span className='total text-sm font-semibold'>100</span></div>
            </div>
       </div>
    )
}