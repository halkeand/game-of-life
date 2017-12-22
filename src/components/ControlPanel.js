import React from 'react';
import Button from './Button';
import GenerationCounter from './GenerationCounter';

const ControlPanel = props => {
  return (
    <section className="control-panel">
      <Button textValue="Run"/>
      <Button textValue="Pause"/>
      <Button textValue="Clear board"/>
      <GenerationCounter/>
    </section>
  )
}

export default ControlPanel
