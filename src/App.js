import './App.css';
import { ListContry } from './ListContry';
import React from "react";


function App(){
  return(
    <div className='all'>
 
<div>
    
  <div className='bodyFone'>
      
<h1>Страны для путешествий! </h1>

    </div>
    <div className='bodyTwo'>
<h3> «Никогда не бойтесь уехать прочь от морей, границ, стран и мыслей» – Амин Маалуф.</h3>
      </div>
<ListContry/>
</div>


      </div>
     
  )
}




export default App;