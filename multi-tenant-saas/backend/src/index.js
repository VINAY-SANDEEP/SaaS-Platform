require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./config/db');

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.get('/api/health', async (req,res)=>{
  try{
    await pool.query('SELECT 1');
    res.json({status:"ok",database:"connected"});
  }catch{
    res.status(500).json({status:"error",database:"disconnected"});
  }
});

app.listen(5000, ()=>console.log("Backend running on port 5000"));
