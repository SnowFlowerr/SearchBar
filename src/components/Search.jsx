import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
import data from './data'

export default function Search() {
    const [inp,setInp]=useState("")
    const [arr,setArr]=useState([])
    function handleChange(e){
        e.preventDefault()
        setInp(e.target.value)
    }
    function handleSelect(select){
        setInp(select)
    }
    useEffect(()=>{
        setArr(data.filter((ele)=>ele.toLowerCase().includes(inp.toLowerCase().trim())))
    },[inp])
    

    return (
        <div className={styles.bigbox}>
            <input type="text" onChange={handleChange} className={styles.inp} value={inp} placeholder='Search Here'/>
            <div className={styles.options}>
            {arr.map((ele) => <div className={styles.opt} onClick={()=>handleSelect(ele)}>{ele}</div>)}
            </div>
        </div>
    )
}
