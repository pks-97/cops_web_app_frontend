import React, {Component} from 'react';
import './styles.GroupsComponent.css';
import Paper from 'material-ui/Paper';
import EditorFormatQuote from 'material-ui/svg-icons/editor/format-quote';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';

class DevGroupComponent extends Component{

    constructor(props) {
        super(props);
        this.state={
            paper11 :{
                left: '-95vw',
                top: '0vh',
            },
            paper12 :{
                left: '130vw',
                top: '0vh',
            },
            paper13 :{
                left: '-98vw',
                bottom: '0vh',
            },
            paper14 :{
                right: '0vw',
                bottom: '-25vh',
            },
        };
    }

    componentDidMount() {
        console.log('exampleComponent mounted');
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        console.log('exampleComponent unmounted');
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        var scrollTop = window.pageYOffset || window.scrollTop;
        var scrollPercent = scrollTop/(window.innerHeight)*100 || 0;
        //console.log(scrollPercent);
        if(scrollPercent>=0)
        {
            this.setState({

            paper11 :{
                left: Math.min(scrollPercent-95,5)+'vw',
                top: '0vh',
            },
            paper12 :{
                left: Math.max(-scrollPercent+130,30)+'vw',
                top: '0vh',
            },
            paper13 :{
                left: Math.min(scrollPercent-98,2)+'vw',
                bottom: '0vh',
            },
            paper14 :{
                right: '0vw',
                bottom: Math.min(scrollPercent-100,0)+'vh',
            },

            });
        }
    }

    render() {
        return (

            <div className="group-list-item">
                <div className="group-list-item-1-container">
                    <div className="group-list-item-1" id="head1">
                        <h2>
                            DEVELOPMENT GROUP
                        </h2>
                        <div>Static content To be changed</div>
                    </div>
                    <Paper id="head11" className="paper paper1 paper11" style={this.state.paper11} zDepth={3}>
                        <div style={{margin: '15% 0 0 20%', position: 'absolute'}}>
                            <h2>Stats <ActionTrendingUp/></h2>
                            <li>59 Mentors</li>
                            <li>513 Members</li>
                            <li>1689 Followers</li>
                            <small>still counting...</small>
                        </div>
                    </Paper>
                    <Paper id="head12" className="paper paper2 paper12" style={this.state.paper12} zDepth={3}>
                        <div style={{margin: '5% 0 0 10%', position: 'absolute'}}>
                        Digital design is like painting, except the paint never dries.<EditorFormatQuote />
                        </div>
                    </Paper>
                    <Paper id="head13" className="paper paper3 paper13" style={this.state.paper13} zDepth={3}>
                        <div style={{margin: '15% 0 0 10%', position: 'absolute'}}>
                            <h2>Description</h2>
                            <div>
                                Welcome to our group of Developers !!! 
                            </div>
                        </div>
                    </Paper>
                    <Paper id="head14" className="paper paper4 paper14" style={this.state.paper14} zDepth={3}>
                        <div style={{margin: '15% 0 0 20%', position: 'absolute'}}>
                            <h2>Most active members</h2>
                            <ul>
                                <li>Aakash Malik</li>
                                <li>Abhinav Singh</li>
                                <li>Divesh Pandey</li>
                                <li>Aakash Malik</li>
                                <li>Abhinav Singh</li>
                                <li>Divesh Pandey</li>
                            </ul>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default DevGroupComponent;
