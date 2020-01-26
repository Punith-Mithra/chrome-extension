import * as React from "react"
import * as ReactDOM from "react-dom"

import "../styles/popup.css"

class Hello extends React.Component {
    state = {
        click: 12
    };

    clickHandler() {
        const click = this.state;
        this.setState({
            click: this.state.click + 1
        })
    }

    render() {
        return (
            <div className="popup-padded">
                <h1 onClick={()=>{
                    debugger;
                    this.setState({
                        click: this.state.click + 1
                    })
                }}>
                    { chrome.i18n.getMessage("l10nHello") }
                </h1>
                <h2>{this.state.click}</h2>
            </div>
        )
    }
}

// --------------

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);
