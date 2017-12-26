import React from 'react';

const GenerationCounter = props => {
  const {generatorCounter} = props
  return (
    <p className="generation-counter">Generations : {generatorCounter || '0'}</p>
  )
}

export default GenerationCounter
