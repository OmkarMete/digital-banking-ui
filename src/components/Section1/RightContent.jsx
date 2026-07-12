import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div id='right' className='h-full overflow-x-auto rounded-4xl flex flex-nowrap gap-10 p-6 w-2/3 '>
            {props.users.map(function (ele, idx) {
                return <RightCard key = {idx} id = {idx} color={ele.color} img={ele.img} tag={ele.tag} intro={ele.intro} />
            })}
        </div>
    )
}

export default RightContent