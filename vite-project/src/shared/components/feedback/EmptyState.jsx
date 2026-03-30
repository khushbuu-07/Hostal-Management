import React from 'react';

function EmptyState({ message = 'No data available' }) {
  return <div>{message}</div>;
}

export default EmptyState;
