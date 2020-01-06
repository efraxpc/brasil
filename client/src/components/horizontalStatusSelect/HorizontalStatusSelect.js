import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

class HorizontalStatusSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.indexSelected !== this.state.indexSelected) {
            this.setState({indexSelected: this.state.indexSelected});
        }
    }

    render() {
        const items = this.props.items
        return (
            <ul>
                {
                    items.map((key, index) => {
                        let color = '#cccccc'
                        if(index === 1){
                            color = 'yellow'
                        }else if(index === 2){
                            color = '#90f09b'
                        }
                        return (<li key={key} style={{display: 'inline'}}>
                            <div className="round sm hollow green" style={{position: 'relative', left:15, backgroundColor: color}}>
                                <FontAwesomeIcon icon={faCheck} style={{
                                    position: 'relative',
                                    bottom: 4,
                                    color: index === this.state.indexSelected ? '#000' : color,
                                    cursor: 'pointer',

                                }}
                                                 onClick={(e) => {
                                                     e.preventDefault()
                                                     let list = [...this.state.list];
                                                     list[key] = true;
                                                     this.setState({list, indexSelected: index});
                                                     this.setState({indexSelected: index});
                                                 }}
                                />
                            </div>
                            <span style={{fontSize: 9, position: 'relative', top: 14, right:9}}>{key}</span></li>)
                    })
                }
            </ul>
        );
    }
}

export default HorizontalStatusSelect
