import { Component } from "react";

class CardList extends Component {
    render() {
        const { workers } = this.props;
        return (
            <div>
                {workers.map((worker) => (
                    <h1 key={worker.id}>{worker.name}</h1>
                ))}
            </div>
        );
    }
}
export default CardList;