import React, {Component} from 'react';
import './styles.GroupsComponent.css';
import DevGroupComponent from './DevGroupComponent';
import MlGroupComponent from './MlGroupComponent';
import CpGroupComponent from './CpGroupComponent';
import InfoGroupComponent from './InfoGroupComponent';

class GroupsListComponent extends Component{
 
    render() {
        return (
            <div className="group-list" >
                <DevGroupComponent/>
                <MlGroupComponent/>
                <CpGroupComponent/>
                <InfoGroupComponent/>
            </div>
        );
    }
}

export default GroupsListComponent;
