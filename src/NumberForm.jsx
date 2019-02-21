import React, {Component} from "react";


class NumberForm extends Component {
    render() {
        const {name, unmarshalFromDecimal, value} = this.props
        const result = unmarshalFromDecimal(value);

        return (
            <div className="NumberForm">
                <label>
                    {name}:
                </label>
                <input type="text" value={result} onChange={this.props.onChange}/>
            </div>)

    }
}


export default NumberForm