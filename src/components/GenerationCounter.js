import React from 'react';

const GenerationCounter = props => {
  const {genCounterValue} = props
  return (
    <p>Generations : {genCounterValue || '0'}</p>
  )
}

export default GenerationCounter
