import React from 'react';
import  './CalculatorRow.css';

const CalculatorRow = ({ index, sign, enabled, onToggle, onChange }) => {
  return (
    <div>
      <input type="number" onChange={(e) => onChange(index, parseInt(e.target.value) || 0)} />
      <button onClick={() => onToggle(index)}>{enabled ? 'Enabled (+)' : 'Disabled (-)'}</button>
      <span>{sign}</span>
    </div>
  );
};

export default CalculatorRow;