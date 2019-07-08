import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Male', value: 'M' },
  { key: 2, text: 'Female', value: 'F' },
]

const DropdownExampleClearable = () => <Dropdown placeholder="Gender"  clearable options={options} selection />

export default DropdownExampleClearable