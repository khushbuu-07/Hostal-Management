import React from 'react';

function StudentRow({ student }) {
  return <div>{student?.name}</div>;
}

export default StudentRow;
