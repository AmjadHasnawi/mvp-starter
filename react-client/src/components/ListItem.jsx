import React from 'react';

const ListItem = (props) => (
  <div>
   UniversityName: {props.item.universityName}, Ranking: {props.item.ranking}
  </div>
)

export default ListItem;