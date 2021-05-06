import { Component } from 'react';
import Card from './Card';

export default class Column extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const cards = this.props.cards.map((card) => <tr><Card key={card.details} details={card.details} column={card.column} status={card.status} columns={this.props.columns} changeColumn={this.props.changeColumn} deleteCard={this.props.deleteCard} /></tr>)

    return (
      <div>
        <th className={"column"}>{this.props.name}</th>
        {cards}
      </div>

    )
  }
}