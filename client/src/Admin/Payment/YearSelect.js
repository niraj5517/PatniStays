import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [

{ key: 2018, text: '2018', value: 2018 },
{ key: 2019, text: '2019', value: 2019 },
  { key: 2020, text: '2020', value: 2020 },
  { key: 2021, text: '2021', value: 2021 },
  { key: 2022, text: '2022', value: 2022 },
  { key: 2023, text: 'May', value: 2023 },
//     { key: 6, text: 'June', value: 6 },
//   { key: 7, text: 'July', value: 7 },
//   { key: 8, text: 'August', value: 8 },
//   { key: 9, text: 'September', value: 9 },
//   { key: 10, text: 'October', value: 10 },
//   { key: 11, text: 'November', value: 11 },
//   { key: 12, text: 'December', value: 12 },
]

const YearSelect = () => <Dropdown clearable options={options} selection />

export default YearSelect;