
import express from 'express';
const app = express();
import 'dotenv/config'

import App from './pages/App';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV)
//console.log("EXTERNAL_API_URL=", process.env.EXTERNAL_API_URL)
//
const errorObj = {ret: "NG", messase: "Error"};
//app.use('/api/common', commonRouter);

//routes
app.get('/*', (req: any, res: any) => {
  try { 
    const html = App({coolieAuth: "" });
    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (error) { res.sendStatus(500); }
});

//start
const PORT = 3000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');
