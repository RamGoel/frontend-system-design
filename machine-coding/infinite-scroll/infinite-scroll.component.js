import React, { useEffect, useRef } from 'react'
import { names } from '../typeahead-input/typeahead-input.data'
import usePageBottom from './hook/usePageBottom'
const InfiniteScroll = () => {
    const [data, setData] = React.useState(names.slice(0, 30))
    const ref = useRef();
   const reachedBottom = usePageBottom();
console.log("reachedBottom", reachedBottom);
    return (
        <div id="container" ref={ref}>
            {
                data.map(name => {
                    return <div style={{ marginTop: '30px' }}>{name}</div>
                })
            }
        </div>
    )
}

export default InfiniteScroll