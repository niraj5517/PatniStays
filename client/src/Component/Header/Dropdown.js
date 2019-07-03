import React from 'react'
import {Dropdown} from 'semantic-ui-react'

const handlePropertySelect = (event, { value }) => {
    // console.log(value);
    let property = event.target.textContent;
    console.log(property);
}

const friendOptions = [{
        key: 'Property 1',
        text: 'Property 1',
        value: 'Property 1',
        image: {
            avatar: true,
            src: 'https://previews.123rf.com/images/memoangeles/memoangeles1706/memoangeles170600022/81055171-strong-man-with-skinny-legs-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer.jpg'
        },
    },
    {
        key: 'Property 2',
        text: 'Property 2',
        value: 'Property 2',
        image: {
            avatar: true,
            src: 'https://airjordanenligen2015.com/images/in-the-clipart-woman-1.jpg'
        },
    },
]

const DropdownExampleSelection = () => ( <
    Dropdown
    clearable
    placeholder='Select Property'
    style={{background:'#fff!important'}}
    onChange = {
        handlePropertySelect
    }
     selection options = {
        friendOptions
    }
    />
)
// console.log();
export default DropdownExampleSelection;
