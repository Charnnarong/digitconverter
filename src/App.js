import React, {Component} from 'react';
import './App.scss';
import NumberForm from "./NumberForm";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleBase = (event, base, sieveInvalidChars) => {
        const rawValue = event.target.value;
        const value = parseInt(rawValue, base);
        if (value > Number.MAX_SAFE_INTEGER) {
            alert(`${value} is beyond Number.MAX_SAFE_INTEGER (${Number.MAX_SAFE_INTEGER})`)
            return
        }

        const prohibitChars = sieveInvalidChars(rawValue);
        if (prohibitChars && prohibitChars.length > 0) {
            return
        }

        if (rawValue.length === 0) {
            return this.setState({value: ''});
        }

        this.setState({value});
    };

    handleChangeDeci = (event) => {
        this.handleBase(event, 10, (asciiStr) => asciiStr.match(/[^\d]/g, ''))
    };

    handleChangeBin = (event) => {
        this.handleBase(event, 2, (asciiStr) => asciiStr.match(/[^01]/g, ''))
    };
    handleChangeOct = (event) => {
        this.handleBase(event, 8, (asciiStr) => asciiStr.match(/[^0-7]/g, ''))
    };
    handleChangeHex = (event) => {
        this.handleBase(event, 16, (asciiStr) => asciiStr.match(/[^0-9a-fA-F]/g, ''))
    };


    decToDec = (asciiDeci) => {
        return asciiDeci
    };
    decToBin = (asciiDeci) => {
        return asciiDeci.toString(2);
    };
    decToOct = (asciiDeci) => {
        return asciiDeci.toString(8);
    };
    decToHex = (asciiDeci) => {
        return asciiDeci.toString(16);
    };

    render() {
        return (
            <div className="App">

                <NumberForm name="Decimal"
                            value={this.state.value}
                            onChange={this.handleChangeDeci}
                            unmarshalFromDecimal={this.decToDec}
                />
                <NumberForm name="Binary"
                            value={this.state.value}
                            onChange={this.handleChangeBin}
                            unmarshalFromDecimal={this.decToBin}
                />
                <NumberForm name="Octal"
                            value={this.state.value}
                            onChange={this.handleChangeOct}
                            unmarshalFromDecimal={this.decToOct}
                />
                <NumberForm name="Hexadecimal"
                            value={this.state.value}
                            onChange={this.handleChangeHex}
                            unmarshalFromDecimal={this.decToHex}
                />
                <div>
                    <p>A simple tool that converts any of decimal, binary, octal and hexadecimal number into other
                        formats simultaneously.</p>
                    <p>Build by developer for developer and serves developer's need</p>
                    <p>Brought to you by <i>Charnnarong Chomthiang</i></p>
                </div>
            </div>
        );
    }
}

export default App;
