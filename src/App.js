import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';

const InstructorItem = props => {
    return (
        <li>
          <h3>{props.name}</h3>
          <h4>Hobbies: {props.hobbies.join(", ")}</h4>
      </li>
    );
  }
  
InstructorItem.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    
    setTimeout(() => {
      // creating random instructor
      const randInst = 
      Math.floor(Math.random() * this.state.instructors.length);
      
      // creating random hobby
      const randHobby = 
      Math.floor(Math.random() * this.state.instructors[randInst].length);
      
      // creating shallow copy of instructor array
      // const instructors = this.state.instructors.slice();
      // Assigning a new object for random instructor 
      // instructors[randInst] = Object.assign({}, instructors[randInst]);
      // creating shallow copy of hobbies array
      // instructors[randInst].hobbies = instructors[randInst].hobbies.slice();
      // Deletes the randHobby
      // [randInst].hobbies.splice(randHobby, 1);
      // this is using the new instructors variable we created in this function
      // this.setState({instructors});
      
      // less complicated way of doing what is commented out above ^^^^^^
      const instructors = this.state.instructors.map((inst, i) => {
        
        if (i === randInst) {
          const hobbies = inst.hobbies.slice();
          hobbies.splice(randHobby, 1);
          return {
                  ...inst,
                  hobbies
                  }
        }
        return inst;
      });
      
      this.setState({instructors});
      
    }, 1000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem
        key = {index}
        name = {instructor.name}
        hobbies = {instructor.hobbies}
      />
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;