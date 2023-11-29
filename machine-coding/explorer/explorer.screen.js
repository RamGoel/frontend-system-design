import { useState } from 'react'
import {ArrowRight2, ArrowDown2} from 'iconsax-react'
export const Explorer = ({ explorer }) => {
    const [isExpanded, setExpanded] = useState(false)
    if (explorer.isFolder) {
        return <div>
            <span
                style={{
                    cursor: 'pointer',
                    padding: '5px',
                    display: 'flex',
                    alignItems: 'center',
                }}
                onClick={() => setExpanded(!isExpanded)}>
                {isExpanded ? <ArrowDown2 size={15} /> : <ArrowRight2 size={15} />} {explorer.name}
                <br />
            </span>
            {isExpanded ? <div style={{ marginLeft: '15px' }}>
                {
                    explorer.items.map(item => {
                        return <Explorer explorer={item} />
                    })
                }
            </div> : null}

        </div>
    } else {
        return <span>{explorer.name}<br /></span>
    }
}