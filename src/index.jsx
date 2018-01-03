import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
      <h1>Help Queue</h1>
      <h2>{new Date().toLocalTimeString()}</h2>
      <h3>Priority: High</h3>
      <p>LetsEncrypt certs Expired.</p>
    </div>,
    document.getElementById('react-app-root')
);
