import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../Components/Cards/Cards'
import InputGroup from '../Components/Filters/Category/InputGroup'
const Episode = () => {
  let[id,setId]=useState(1)
  let [info,setInfo]=useState([])
  let {air_date,name}=info
  let [results,setResults]=useState([])
  let api = `https://rickandmortyapi.com/api/episode/${id}`
  useEffect(()=>{
(async function(){
  let data = await fetch(api).then(res=>res.json())
  setInfo(data)
  let a = await Promise.all(
    data.characters.map((x)=>{
      return fetch(x).then(res=>res.json())
    })
  );
  setResults(a);
})()
  },[api])
  return (
    <div className='container'>
      <div className="row mb-4">
        <h1 className="text-center mb-3">
          Episode :{" "}
          <span className="text-primary">
           {name===""?"unknown":name}
          </span>
        </h1>
        <h5 className="text-center">
          Air Date : {air_date===""?"Unknown":air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4"> Pick Episodes</h4>
          <InputGroup total={51} name="Episode" setId={setId}/>
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episode
