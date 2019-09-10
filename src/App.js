import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "./App.css";
import { setStateAction} from './actions';
import SimpleTable from './components/SimpleTable';




class App extends Component {
  constructor(){
    super()

    //Creando estado default.
    this.state = { 'array':
    [{
      'name': 'defult',
      'active':false,
      'project_url': "", 
      'quantity_developers': 0, 
      'frameworks' : ["",""]}
    ]};
  }

  //funcion que recibe un array e invoca un StateAction
  setStateFunction = array => {
    console.log("setStateFuction") //hace un dispatch al store
    this.props.dispatchSetStateAction(array);

  }

  componentDidMount() {
    console.log("ComponenDidMount");
    axios.get("https://cors-anywhere.herokuapp.com/http://jbloem.bucares.net/api/test.json")
    .then(response =>{
      this.setState({'array': response.data}); // <- haciendo trampa
      this.setStateFunction(response.data);
    })
    .catch(this.state.array)
   
  }

  render() {
     const { array } = this.state;
     console.log("renderizado");
    return(
      <div className="App">
        <SimpleTable data = {array}/>
      </div>
      )};
}



App.propTypes = {
  'dispatchSetStateAction' : PropTypes.func.isRequired,
}

/*const mapStateToProps = state => {
  return({
    'array': state.array
})};*/

const mapDispatchToPropsActions = dispatch =>({
  'dispatchSetStateAction' : value => dispatch(setStateAction(value))
});

export default connect(null,mapDispatchToPropsActions)(App);

//export default connect(mapStateToProps,mapDispatchToPropsActions)(App);
