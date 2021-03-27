import express from 'express';
import bodyParser from 'body-parser';
import api from './routers/index';
import cors from 'cors';

const app = express();

// body의 userID 와 password 값을 얻을 수 있음
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use('/api', api);

app.listen(3002, () => console.log('Node.js Server is running on port 3002...'));
 