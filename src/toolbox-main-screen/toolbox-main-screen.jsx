import React from 'react';
import './toolbox-main-screen.css';
import WidgetPanel from './widget-panel/widget-panel.jsx';
import TabPanel from './tab-switcher/tab-panel.jsx';
import ToolBoxHeader from './header/toolbox-header.jsx';

function ToolboxMainScreen() {
  return (
    <div className='toolbox-main-screen'>
      <div className='toolbox-main-screen-header-grid'>
        <ToolBoxHeader />
        <div className='toolbox-main-screen-grid'>
          <><TabPanel /><WidgetPanel /></>
        </div>
      </div>\
    </div>
  );
};

export default ToolboxMainScreen;