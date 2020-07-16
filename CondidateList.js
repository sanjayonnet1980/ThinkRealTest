import React,{Component} from 'react';

class CondidateList extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'CondidateList'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Condiate is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick Condidate Name :
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Condidate1">CondidateName1</option>
              <option value="Condidate2">CondidateName2</option>
              <option value="Condidate3">CondidateName3</option>
              <option value="Condidate4">CondidateName4</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default CondidateList;