import {Component} from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
      status: this.props.status,
      column: this.props.column,
    }

    this.handleDetailsChange = this.handleDetailsChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleColumnChange = this.handleColumnChange.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  handleDetailsChange(event) {
    this.setState({
      details: event.target.value,
    });
  }

  handleStatusChange(event) {
    this.setState({
      status: event.target.value,
    });
  }

  handleColumnChange(event) {
    event.preventDefault();
    this.setState({
      column: event.target.value,
    });
    this.props.changeColumn(this.state, event.target.value);
  }

  handleDeleteCard(event) {
    event.preventDefault();
    this.props.deleteCard(this.state);
    this.setState({
      details: '',
      status: '',
      column: '',
    });
  }

  render () {
    const columnOptions = this.props.columns.map((column) => <option key={column} value={column}>{column}</option>);

    return (
      <td className={"card"}>
        <span>Details:</span>
        <br />

        <textarea onChange={this.handleDetailsChange} defaultValue={this.props.details} rows="4" cols="25" />

        <label className={"card-label"}>
          Status: <br />

          <select onChange={this.handleStatusChange} value={this.state.status} name="status" id="status">
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="blocked">Blocked</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <label className={"card-label"}>
          Move To: <br />

          <select onChange={this.handleColumnChange} value={this.state.column} name="column" id="column">
            {columnOptions}
          </select>
        </label>

        <button onClick={this.handleDeleteCard} className={"card-button"}>X</button>
      </td>
    )
  }
}