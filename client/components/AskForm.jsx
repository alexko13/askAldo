import React, { Component } from 'react';

const AskForm = (props) => {
  return (
    <form onSubmit={props.onAskSubmit} >
      <input
        onChange={props.onAskChange}
        value={props.ask}
        required
      />
    <input type="submit" value="askAldo" />
    </form>
  )
}

AskForm.propTypes = {
  onAskSubmit: React.PropTypes.func.isRequired,
  onAskChange: React.PropTypes.func.isRequired,
  ask: React.PropTypes.string,
}

export default AskForm;
