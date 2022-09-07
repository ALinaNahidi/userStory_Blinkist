import React from 'react'

const IconLabel = ({Icon, label}) => {
  return (
    <div>
      <Icon /> <span>{label}</span>
    </div>
  );
}

export default IconLabel