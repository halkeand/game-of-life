import React from 'react';
import Button from './Button';
import GenerationCounter from './GenerationCounter';

const ControlPanel = props => {
  const { isRunning, handleRunClick, generatorCounter, handleClearBoard, handleGetRandomBoard, handleSmallSize, handleMediumSize, handleLargeSize } = props;
  return (
    <section className="control-panel">
      <div>
        <Button textValue={isRunning ? "Pause" : "Run"} onClick={handleRunClick}/>
        <Button textValue="Clear board" onClick={handleClearBoard}/>
        <Button textValue="Get random board" onClick={handleGetRandomBoard}/>
        <GenerationCounter generatorCounter={generatorCounter}/>
      </div>
      <div>
        <Button textValue="Little size" onClick={handleSmallSize}/>
        <Button textValue="Medium size" onClick={handleMediumSize}/>
        <Button textValue="Large size" onClick={handleLargeSize}/>
      </div>
    </section>
  )
}

export default ControlPanel
