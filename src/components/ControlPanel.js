import React from 'react';
import Button from './Button';
import GenerationCounter from './GenerationCounter';

const ControlPanel = props => {
  const { isRunning, handleRunClick, generatorCounter, handleClearBoard } = props;
  return (
    <section className="control-panel">
      <Button textValue={isRunning ? "Pause" : "Run"} onClick={handleRunClick}/>
      <Button textValue="Clear board" onClick={handleClearBoard}/>
      <Button textValue="Get ranbdom board"/>
      <GenerationCounter generatorCounter={generatorCounter}/>
    </section>
  )
}

export default ControlPanel
