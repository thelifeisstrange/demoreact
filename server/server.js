import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from  'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'kulkarni',
    database:'hnf'
});

app.listen(5000, () =>{
    console.log("Server running on port 5000");
})

