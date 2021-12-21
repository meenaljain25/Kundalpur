import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import kalash from '../../kalash/kalash';
import PanelBarNavContainer from './PanelBarNavContainer';
import Aawas from '../../aawas/aawas' 


const SideBar = () =>{
return (
<HashRouter>
    <PanelBarNavContainer>
      <Switch>
        <Route exact={true} path="/Kalash" component={kalash} />
        <Route exact={true} path="/Aawas" component={Aawas} />
      
      </Switch>
    </PanelBarNavContainer>
  </HashRouter>);};

export default SideBar

