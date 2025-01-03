export default function Village() {
    return (
        <>
            <div className="addSkills-wrap">

                <div className="addSkills onsen">
                    <div className="txt">
                        <h4 className='text-lg'>온천</h4>
                        <p className='disc text-sm'>체력과 마나를 완전히 회복시켜주는 마을의 유명한 온천입니다.<br/>단, 입장료가 있어 방문 전 지갑을 확인해주세요!</p>
                        <button type='button'>-5 G</button>
                    </div>
                </div>

                <div className="addSkills buff">
                    <div className="txt">
                        <h4 className='text-lg'>원소 구슬</h4>
                        <p className='disc text-sm'>능력을 영원히 올려주는 신비한 구슬입니다.<br/>그러나 모든 효과에는 부작용이 있기 마련...</p>
                        <button type='button'>-10 G</button>
                    </div>
                </div>

            </div>
        </>
    )
}