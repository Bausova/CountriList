import { Component } from "react";
import travel from './travel.png';
import swal from "sweetalert";





export class ListContry extends Component{
    state ={
    userInput:"",
contryList:[]

    }



    listEvent(event){
       this.setState({userInput:event})
      
    }

    buttonList(add){
        if (add === ""){
            swal ( " Введите название страны, куда хотели бы поехать!" )  ;
        }
        else{
        let listArray = this.state.contryList;
        listArray.push(add)
        this.setState({contryList:listArray, userInput:""})
        
    }
}

    crossContry(event){
        const li = event.target;
        li.classList.toggle('crossed');
    
    }

   
    onEnterToList(event){
        event.preventDefault()
    }


    deleteContry(){
       
        let listArray = this.state.contryList;
        listArray =[];
        this.setState({contryList: listArray, userInput:" "})
    }
    



render () {
    return(
        <div>
            <form onSubmit={this.onEnterToList}>
          
        <div className="container">
            <input placeholder="Введите название страны" type='text'
            onChange= {(e)=>{this.listEvent(e.target.value)}}
            value = {this.state.userInput}/>
        </div>

<div className="container">
    <button onClick={()=> this.buttonList(this.state.userInput)}>В лист желаний!</button>
</div>


<ul >
    {this.state.contryList.map((item, index) => (
    <li className="containerTwo" onClick={this.crossContry} key = {index}> <img src= {travel} width="35px" alt = "icon"/> {item} </li>))}

</ul>

<div className="container">
    <button className="delete" onClick ={()=> this.deleteContry()}> Отменить все поездки!</button>
</div>
</form>
        </div>
    )
}
}
