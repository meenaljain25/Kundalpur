import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import '../style.css';

const SideBar = () => {
  const imageUrl = imageName => {
    let baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';
    return baseImageUrl + imageName + '.jpg';
  };

  return <div className="panelbar-wrapper">
        <PanelBar>
        
       
          <PanelBarItem title="Kalash"/>
            <PanelBarItem title="Aawas" />
            <PanelBarItem title="Patra" />
            <PanelBarItem title="Bhojanshala" />
            <PanelBarItem title="Report" />
            <PanelBarItem title="Config" >         
          <PanelBarItem title="User"  />
          <PanelBarItem title="Role"  />
         </PanelBarItem>
        </PanelBar>
      </div>;
};
export default SideBar