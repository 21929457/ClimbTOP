import userImg from '../image/user/ddotg.jpg'

export default function UserState() {
    return (
        <>

            <div className="user-state">

                <div className="user-hp-wrap rounded-full">

                    <div className="user-hp  bg-red-500"></div>
                    <div className="user-hp-text"><span className="current text-xs font-semibold">100</span> / <span className="total text-xs font-semibold">100</span></div>
                
                </div>

                <div className="user-mp-wrap rounded-full">

                    <div className="user-mp bg-blue-500"></div>
                    <span className="user-mp-text"><span className="current text-xs font-semibold">100</span> / <span className="total text-xs font-semibold">100</span></span>
                
                </div>

            </div>

            <div className="user-wrap">

                <div className="user-info-wrap">
                    
                    <img src={userImg} alt='userImage' className="character-image"></img>

                    <ul className="user-info">
                        <li>
                            <i>⚔️</i>
                            <span>5</span>
                        </li>
                        <li>
                            <i>🪄</i>
                            <span>2</span>
                        </li>
                        <li>
                            <i>🛡️</i>
                            <span>10</span>
                        </li>
                        <li>
                            <i>💧</i>
                            <span>10</span>
                        </li>
                    </ul>

                </div>

                <div className="user-stack">

                    <h4 className="pb-2">Skills</h4>

                    <ul className="skill-slots">

                        <li className="bg-menuBg rounded-md"></li>
                        <li className="bg-menuBg rounded-md"></li>
                        <li className="bg-menuBg rounded-md"></li>
                        <li className="bg-menuBg rounded-md"></li>

                    </ul>

                    <h4 className="pb-2">Items</h4>

                    <ul className="item-slots">

                        <li className="bg-menuBg rounded-md"></li>
                        <li className="bg-menuBg rounded-md"></li>
                        <li className="bg-menuBg rounded-md"></li>
                        <li className="bg-menuBg rounded-md"></li>

                    </ul>

                </div>
            </div>
        </>
    )
}