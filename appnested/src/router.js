import axios from'axios';
import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';

export default function AppRouter() {
  const [data, setData] = useState('');
const Api = () =>{
axios.get('https://jsonplaceholder.typicode.com/posts/1',{
}).then((res) => {setData(res.data)}) 
}
const Comments = () =>{
axios.get('https://jsonplaceholder.typicode.com/comments/1',{
}).then((res) => {setData(res.data)}) 
}
const Albums = () =>{
axios.get('https://jsonplaceholder.typicode.com/albums/1',{
}).then((res) => {setData(res.data)}) 
}
const Photos = () =>{
axios.get('https://jsonplaceholder.typicode.com/photos/1',{
}).then((res) => {setData(res.data)}) 
}
const Todos = () =>{
axios.get('https://jsonplaceholder.typicode.com/todos/1',{
}).then((res) => {setData(res.data)}) 
}
const Users = () =>{
axios.get('https://jsonplaceholder.typicode.com/users/1',{
}).then((res) => {setData(res.data)}) 
}

    return (
      <> 
      <br />
      <br />
      <br />
<div className='divdesign'>
      <Button variant="contained" onClick={Api} color="success">POST</Button>
      <Button variant="contained" onClick={Comments} color="success">Comments</Button>
      <Button variant="contained" onClick={Albums} color="success">Albums</Button>
      </div>
<br />
<br />
<div className='divdesign'>
      <Button variant="contained" onClick={Photos} color="success">Photos</Button>

      <Button variant="contained" onClick={Todos} color="success">Todos</Button>

      <Button variant="contained" onClick={Users} color="success">Users</Button>
      </div>
      {data ?
data.userId: ''}
<br />
<br />
      {data ?
data.id: ''}
<br />
<br />
      {data ?
data.title: ''}
<br />
<br />
      {data ?
data.body: ''}
      {data ?
data.url: ''}
      {data ?
data.thumbnailUrl: ''}
         </>
    );
  
  };
