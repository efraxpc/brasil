
import React from 'react';
import 'antd/dist/antd.css';
import { Select, Icon, Divider } from 'antd';

const { Option } = Select;

let index = 0;

class SpecialSelect extends React.Component {
    state = {
        items: ['GMAIL.COM', 'OUTLOOK.COM', 'YAHOO.COM', 'ZOHO.COM'],
    };

    addItem = () => {
        console.log('addItem');
        const { items } = this.state;
        this.setState({
            items: [...items, `New item ${index++}`],
        });
    };

    render() {
        const { items } = this.state;
        return (

                <Select
                    style={{ width: '100%' }}
                    placeholder="DOMINIO"
                    dropdownRender={menu => (
                        <div>
                            {menu}
                            <Divider style={{ margin: '4px 0' }} />
                            <div
                                style={{ padding: '4px 8px', cursor: 'pointer' }}
                                onMouseDown={e => e.preventDefault()}
                                onClick={this.addItem}
                            >
                                <Icon type="plus" /> Adicionar
                            </div>
                        </div>
                    )}
                >
                    {items.map(item => (
                        <Option key={item}>{item}</Option>
                    ))}
                </Select>

        );
    }
}

export default SpecialSelect;
