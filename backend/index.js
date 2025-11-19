
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

let videos = [
  { id: 1, url: "sample1.mp4", likes: 10 },
  { id: 2, url: "sample2.mp4", likes: 5 }
];

app.get('/videos', (req,res)=>{ res.json(videos); });
app.post('/like/:id', (req,res)=>{
  const v = videos.find(x=>x.id==req.params.id);
  if(v){ v.likes++; }
  res.json(v);
});

app.listen(5000, ()=> console.log("Backend running"));
