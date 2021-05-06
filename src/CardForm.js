import {Component} from 'react';

export default class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: '',
      column: '',
      status: 'To Do',
    }

    this.handleDetailsChange = this.handleDetailsChange.bind(this);
    this.handleColumnChange = this.handleColumnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDetailsChange(event) {
    this.setState( {details: event.target.value} );
  }

  handleColumnChange(event) {
    this.setState( {column: event.target.value} );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCard(this.state)
    this.setState({
      details: '',
      status: 'To Do',
    });
  }

  render () {
    const columnOptions = this.props.columns.map((column) => <option key={column} value={column}>{column}</option> )

    return (
      <div className={"card-form"}>
        <form onSubmit={this.handleSubmit}>
          <label className={"card-label"}>Card Information</label>

          <label className={"card-label"}>
            Enter Details...
            <textarea onChange={this.handleDetailsChange} value={this.state.details} rows="4" cols="25" />
          </label>

          <label className={"card-label"}>
            Column <br />
            <select onChange={this.handleColumnChange} name="column-options" id="column-options">
              <option defaultValue="selected">Select</option>
              {columnOptions}
            </select>
          </label>

          <input className={"submit-button"} type="submit" value="Add New Card" />
        </form>
      </div>
    )
  }
}