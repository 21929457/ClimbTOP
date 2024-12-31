import $ from 'jquery'

export default function Store() {
    let buyBtn = $('.info')
    let closeBtn = $('.closeBtn')
    let disc = $('.disc-wrap')

    buyBtn.on('click' , function(){
        disc.addClass('show')
    })
    closeBtn.on('click' , function(){
        disc.removeClass('show')
    })

    return(
        <div className="contents-view store-contents ">

            <div className='items'>
                <div className='item'>
                    
                    <img alt="item_1"/>

                    <div className="btn-wrap">
                        <button type='button' className="info">정보</button>
                        <span></span>
                        <button type='button' className="buy">구매</button>
                    </div>
                    
                    <div className='disc-wrap'>
                        <button type='button' className='closeBtn'></button>
                        <p className='name'>리자드 암</p>
                        <p className='cost'><span>100</span>G</p>
                        <span className='line'></span>
                        <p className='disc'>공격 +10</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}