import { Component } from 'react';

export default class ColumnForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState( {value: event.target.value} );
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.props.columns.includes(this.state.value)) {
      alert(`${this.state.value} is already a column!`);
    } else {
      this.props.addColumn(this.state.value);
      this.setState( {value: ''} );
    }
  }

  render() {
    return (
      <div className={"column-form"}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Column Name
            <input onChange={this.handleChange} value={this.state.value} rows="1" cols="25"/>
          </label>
          <input className={"submit-button"} type="submit" value="Add New Column" />
        </form>
      </div>
    )
  }
}