import {Component} from 'react';
import CardForm from './CardForm';
import ColumnForm from './ColumnForm';
import Column from './Column';
import Card from './Card';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: {Default: [],},
    }

    this.addColumn = this.addColumn.bind(this);
    this.addCard = this.addCard.bind(this);
    this.changeColumn = this.changeColumn.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  addColumn(value) {
    this.state.columns[`${value}`] = [];
    this.setState({
      columns: this.state.columns,
    });
  }

  addCard(card) {
    this.state.columns[card.column].push(card);
    this.setState({
      columns: this.state.columns,
    });
  }

  changeColumn(card, moveTo) {
    const state_column = this.state.columns[card.column];
    const moveToColumn = this.state.columns[moveTo];

    const cardToMove = state_column.find((columnCard) => columnCard.details === card.details );
    const index = state_column.indexOf(cardToMove);

    // Remove card from current column
    state_column.splice(index, 1);

    // Update the card so its select will default to new column
    card.column = moveTo;

    // Move card to new column
    moveToColumn.push(card);

    this.setState({
      columns: this.state.columns,
    });
  }

  deleteCard(card) {
    // This is redundent and repeats what is done in this.changeColumn
    // and could be refactored
    const state_column = this.state.columns[card.column];
    const cardToDelete = state_column.find((columnCard) => columnCard.details === card.details);
    const index = state_column.indexOf(cardToDelete);

    state_column.splice(index, 1);

    this.setState({
      columns: this.state.columns,
    });
  }

  render () {
    const columnkeys = Object.keys(this.state.columns);
    const columns = columnkeys.map((columnName) => <Column key={columnName} name={columnName} cards={this.state.columns[columnName]} columns={columnkeys} changeColumn={this.changeColumn} deleteCard={this.deleteCard}/>);

    return (
      <div>
        <div className={"form-section"}>
          <ColumnForm addColumn={this.addColumn} columns={columnkeys} />
          <CardForm addCard={this.addCard} columns={columnkeys} />
        </div>
        <div className={"board"}>
          <table>
            <tr className={"flex-row"}>
              {columns}
            </tr>
          </table>
        </div>
      </div>
    )
  }
}