import React, {Component} from 'react';
import './styles.GroupsComponent.css';
import GroupsHeadComponent from './GroupsHeadComponent';
import GroupsListComponent from './GroupsListComponent';

class GroupsComponent extends Component{
 
    render() {
        return (
            <div className="main-container">
                <GroupsHeadComponent/>
                <GroupsListComponent/>
            </div>
        );
    }
}

export default GroupsComponent;
