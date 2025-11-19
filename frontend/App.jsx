
import React, { useEffect, useState } from 'react';

export default function App(){
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/videos')
      .then(r=>r.json())
      .then(setVideos);
  },[]);

  return (
    <div style={{height:"100vh",overflow:"scroll"}}>
      {videos.map(v=>(
        <div key={v.id} style={{height:"100vh",border:"1px solid #000"}}>
          <video src={v.url} controls style={{height:"100%"}}></video>
          <button onClick={()=>{
            fetch("http://localhost:5000/like/"+v.id,{method:"POST"})
            .then(()=>alert("Liked"));
          }}>❤️ {v.likes}</button>
        </div>
      ))}
    </div>
  );
}
