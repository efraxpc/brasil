
import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Select, Icon, Divider } from 'antd';

const { Option } = Select;

let index = 0;

const SpecialSelect = ( ) => {
    const [items, setItems] = useState(['GMAIL.COM', 'OUTLOOK.COM', 'YAHOO.COM', 'ZOHO.COM']);

    const addItem = () => {
        setItems([...items,`New item ${index++}`]);
    };

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
                        onClick={addItem}
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

export default SpecialSelect;
