import { useState } from 'react'

export const Folder=({explorer})=>{
    const [isExpanded, setExpanded]=useState(false)
    if(explorer.isFolder){
        return <div>
            <span style={{cursor:'pointer', padding:'5px', backgroundColor:'red'}} onClick={()=>setExpanded(!isExpanded)}> {isExpanded?'open = ':'closed = '}{explorer.name}<br/></span>
                {isExpanded?<div style={{marginLeft:'15px'}}>
                    {
                explorer.items.map(item=>{
                    return <Folder explorer={item} />
                })
                }
                </div>:null}
            
        </div>
    }else{
        return <span >{explorer.name}<br /></span>
    }
}