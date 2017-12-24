import React from 'react';
import Button from './Button';
import GenerationCounter from './GenerationCounter';

const ControlPanel = props => {
  const { isRunning, handleRunClick, generatorCounter } = props;
  return (
    <section className="control-panel">
      <Button textValue={isRunning ? "Pause" : "Run"} onClick={handleRunClick}/>
      <Button textValue="Clear board"/>
      <GenerationCounter generatorCounter={generatorCounter}/>
    </section>
  )
}

export default ControlPanel
