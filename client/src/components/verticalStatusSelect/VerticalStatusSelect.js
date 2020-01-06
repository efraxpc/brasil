import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class VerticalStatusSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.indexSelected !== this.state.indexSelected) {
            this.setState({indexSelected:this.state.indexSelected });
        }
    }
    render() {
        const items = this.props.items
        return (
            <ul className={'ulTimeLine '}>
                {
                    items.map((key,index) => (
                        <li key={key}> <div className="round sm hollow green" style={{position:'relative',right:12}}>
                            <FontAwesomeIcon icon={faCheck} style={{position:'relative', bottom:4, color:index<=this.state.indexSelected?'green':'#fff', cursor:'pointer'}}
                                             onClick={(e)=>{
                                                 e.preventDefault()
                                                 let list = [...this.state.list];
                                                 list[key] = true;
                                                 this.setState({ list, indexSelected:index });
                                                 this.setState({indexSelected:index });
                                             }}
                            />
                        </div><span className={'my-auto'}>{key}</span></li>
                    ))
                }
            </ul>
        );
    }
}

export default VerticalStatusSelect
