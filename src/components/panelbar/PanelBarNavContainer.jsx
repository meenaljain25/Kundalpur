import * as React from 'react';

import { withRouter } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import kalashimg from '../../Images/np-kalash.png'
import Aawasimg from '../../Images/np-housing.png'
import Patraimg from '../../Images/group-6.png'
import Bhojanshalaimg from '../../Images/page-1.png'
import Helplineimg from '../../Images/shape.png'
import Reportimg from '../../Images/np-report-4474118-ffffff.png'
import Usersimg from '../../Images/np-user-1160190-ffffff.png'
import Rolesimg from '../../Images/np-user-setting-3197125-ffffff.png'

const paths = [{
    path: "/",
    index: '0'
}, {
    path: "/Kalash",
    index: '1'
}, {
    path: "/Aawas",
    index: '2'
}, {
    path: "/Patra",
    index: '3'
}];

const PanelBarNavContainer = props => {
    const onSelect = event => {
        props.history.push(event.target.props.route);
    };

    const setSelectedIndex = pathName => {
        let currentPath = paths.find(item => item.path === pathName);
        return currentPath.index;
    };
    const names = ['Kalash', 'Aawas', 'Patra'];
    const selected = setSelectedIndex(props.location.pathname);
    return <div style={{ display: 'flex', width: '100%' }} >

        <div style={{ minWidth: '20%', maxWidth: '20%' }} className='sidebar'>
            <ul className='sidebarli'>
                {/* {names.map(function (name, index) {
                    var path =`/${name}`
                    return <li key={index} ><Link to={path}></Link>
                    <a href=""><img src={kalashimg}  width="200" height="auto" /></a>{name}
                    </li>;
                })} */}
                <li key={0} > <a href=""><img src={kalashimg}  /></a><Link to="/Kalash" className='litext'> कलश</Link>
                </li>

                    <li key={1} ><a href=""><img src={Aawasimg} /></a><Link to="/Aawas" className='litext'> आवास</Link>
                    
                    </li>

                    <li key={2} > <a href=""><img src={Patraimg} /></a><Link to="/Aawas" className='litext'>पंचकल्याणक पात्र</Link>
                    
                    </li>

                    <li key={3} ><a href=""><img src={Bhojanshalaimg} /></a><Link to="/Aawas" className='litext'>  भोजनशाला</Link>
                   
                    </li>

                    <li key={4} > <a href=""><img src={Helplineimg} /></a><Link to="/Aawas" className='litext'>   हेल्पलाइन   </Link>
                  
                    </li>

                    <li key={5} >    <a href=""><img src={Reportimg} /></a><Link to="/Aawas" className='litext'> Reports</Link>
                
                    </li>

                    <li key={6} ><a href=""><img src={Usersimg} /></a><Link to="/Aawas" className='litext'>   Users</Link>
                  
                    </li>

                    <li key={7} > <a href=""><img src={Rolesimg} /></a><Link to="/Aawas" className='litext'> Roles</Link>
                   
                    </li>
            </ul>
            {/* <PanelBar selected={selected} expandMode={'single'} onSelect={onSelect}>
                <PanelBarItem title={'Kalash'} route="/Kalash" />
                <PanelBarItem title={'Aawas'} route="/Aawas" />
                <PanelBarItem title={'Patra'} route="/Patra" />
                <PanelBarItem title={'Bhojanshala'} route="/Bhojanshala" />
                <PanelBarItem title={'Helpline'} route="/Helpline" />
                <PanelBarItem title={'Report'} route="/Report" />
                <PanelBarItem title={'Config'} route="/Config" >
                    <PanelBarItem title={'User'} route="/Config/use" />
                    <PanelBarItem title={'Role'} route="/Config/role" />
                </PanelBarItem>

            </PanelBar> */}
        </div>
        <div style={{ paddingLeft: '10pt' }}>{props.children}</div>
    </div>;
};

export default withRouter(PanelBarNavContainer);