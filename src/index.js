import React from 'react';
import { createRoot } from 'react-dom/client';
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import './common/common.css';
//ReactDOM.render(<AddSubscriber />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ShowSubscribers />);
