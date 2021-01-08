import logo from './logo.svg';
import './App.css';
import react from 'react';

import React, { Component } from 'react';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {

  state =  {

    persons: [
   
      { id: 'FA1', name : 'Battu', age: '26'},
      { id: 'FA2',name : 'Ankit', age: '29'},
      { id: 'FA3',name : 'Ama', age: '24'}

    ],
    otherState: 'Some Other Value',
    showPersons: false

  }
  
 deletePersonHandler = (personindex) => {

  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personindex,1)
  this.setState({persons : persons})


 }

  nameChangedhandler = (event, id ) =>{

    const personIndex = this.state.persons.findIndex( p =>{

      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});


    this.setState({

      persons: [
   
        { name : 'Ashutosh', age: '28'},
        { name : event.target.value, age: '29'},
        { name : 'Aman', age: '26'}
  
      ]
    }
     )
  }
  togglePersonsHandler = ()  =>{

    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow});

  }
  
  render()
  {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer',
      

    };

    let persons = null;
    if(this.state.showPersons)
    {
      persons = (

        <div>
          { this.state.persons.map((person , index) => {


            return <Person
            click={() => this.deletePersonHandler(index)}
            name= {person.name}
            age= {person.age}
            key ={person.id}
            changed = { (event) => { this.nameChangedhandler(event, person.id)}}
            /> 
          }
            )}
      
        </div>

      );
      style.backgroundColor = 'red';
      
      

    }

    let classes = [ ];
    if(this.state.persons.length <=2)
    {
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }


  return (
    
    <div className="App">
      <h1>Hi, I am from varanasi</h1>
      <p className={classes.join(' ')}>Hi Battu Baba</p>
      <button style= { style} onClick={this.togglePersonsHandler}>Switch Name</button>
      {persons}
      
      
      
    </div>
    
    
  ); 
  // return react.createElement('div',{ className : 'App'}, react.createElement('h1',null,'Hi, I am from gahmar'));
}
}

export default App;
