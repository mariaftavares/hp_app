import React , { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'


function App() {
  const [data,setData] = useState([]);
  return(
    <div>
      <Header setData= {setData} />
      <Main  data = {data}/>
    </div>
  );
}

export default App;
