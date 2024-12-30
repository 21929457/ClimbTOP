// import $ from 'jquery'
// import axios from 'axios'

export default function Store() {
    // let items = $('.items')

    // axios.get('../data/item.json').then(function(data){
    //     data.forEach(function(e , i) {
    //         items.append(`
    //             <div className='item' style={{backgroundImage : url("${e.url}")}}>
    //                 <p className='name'>${e.name}</p>
    //                 <p className='disc'>${e.disc}</p>
    //                 <p className='cost'><span>${e.cost}</span>G</p>
    //                 <button type='button'>구매</button>
    //             </div>
    //         `)
    //     })
    // }).catch(function(){

    // })
    return(
        <div className="contents-view store-contents ">
            <div className='items'>
                <div className='item'>
                    <p className='name'>위자드 웜</p>
                    <p className='cost'><span>50</span>G</p>
                    <div className="btn-wrap">
                        <button type='button' className="info">정보</button>
                        <button type='button' className="buy">구매</button>
                    </div>
                </div>
            </div>
        </div>
    )
}