import React from 'react'
import './List.css'

import ListItem from './ListItem'

const List = ({data}) => (
  <div className="list">
    {data && data.map((item, i) => (
      <ListItem key={i} data={item} />
    ))}
  </div>
)

export default List
