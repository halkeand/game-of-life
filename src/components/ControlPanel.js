import React from 'react';
import Button from './Button';
import GenerationCounter from './GenerationCounter';

const ControlPanel = props => {
  const { handleRunSpeedChange, runSpeed, isRunning, handleRunClick, generatorCounter, handleClearBoard, handleGetRandomBoard, handleSmallSize, handleMediumSize, handleLargeSize } = props;
  return (
    <section className="control-panel">
      <div>
        <div className="flex-btn">
          <Button textValue={isRunning ? "Pause" : "Run"} onClick={handleRunClick}/>
          <Button textValue="Clear board" onClick={handleClearBoard}/>
          <Button textValue="Get random board" onClick={handleGetRandomBoard}/>
        </div>
        <GenerationCounter generatorCounter={generatorCounter}/>
      </div>
      <div className="size-and-runspeed">
        <div className="flex-btn">
          <Button textValue="Small size" onClick={handleSmallSize}/>
          <Button textValue="Medium size" onClick={handleMediumSize}/>
          <Button textValue="Large size" onClick={handleLargeSize}/>
        </div>
        <div className="runspeed-control">
          <p>Run speed (Ms), hit the pause/run button to see the change </p>
          <input className="runspeed-input" type="number" value={runSpeed} onChange={handleRunSpeedChange}/>
        </div>
      </div>
    </section>
  )
}

export default ControlPanel
