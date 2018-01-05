import React, {Component} from 'react';
import './styles.TeamMembers.css'
import Paper from 'material-ui/Paper';
import EditorFormatQuote from 'material-ui/svg-icons/editor/format-quote';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';

class TeamMembers extends Component{

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
            paper21 :{
                left: '-95vw',
                top: '0vh',
            },
            paper22 :{
                left: '130vw',
                top: '0vh',
            },
            paper23 :{
                left: '-98vw',
                bottom: '0vh',
            },
            paper24 :{
                right: '0vw',
                bottom: '-25vh',
            },
            paper31 :{
                left: '-95vw',
                top: '0vh',
            },
            paper32 :{
                left: '130vw',
                top: '0vh',
            },
            paper33 :{
                left: '-98vw',
                bottom: '0vh',
            },
            paper34 :{
                right: '0vw',
                bottom: '-25vh',
            },
            paper41 :{
                left: '-95vw',
                top: '0vh',
            },
            paper42 :{
                left: '130vw',
                top: '0vh',
            },
            paper43 :{
                left: '-98vw',
                bottom: '0vh',
            },
            paper44 :{
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
        
        if(scrollPercent>=100)
        {
            this.setState({

            paper21 :{
                left: Math.min(scrollPercent-100-95,5)+'vw',
                top: '0vh',
            },
            paper22 :{
                left: Math.max(-scrollPercent+100+130,30)+'vw',
                top: '0vh',
            },
            paper23 :{
                left: Math.min(scrollPercent-100-98,2)+'vw',
                bottom: '0vh',
            },
            paper24 :{
                right: '0vw',
                bottom: Math.min(scrollPercent-100-100,0)+'vh',
            },

            });
        }

        if(scrollPercent>=200)
        {
            this.setState({

            paper31 :{
                left: Math.min(scrollPercent-200-95,5)+'vw',
                top: '0vh',
            },
            paper32 :{
                left: Math.max(-scrollPercent+200+130,30)+'vw',
                top: '0vh',
            },
            paper33 :{
                left: Math.min(scrollPercent-200-98,2)+'vw',
                bottom: '0vh',
            },
            paper34 :{
                right: '0vw',
                bottom: Math.min(scrollPercent-200-100,0)+'vh',
            },

            });
        }

        if(scrollPercent>=300)
        {
            this.setState({

            paper41 :{
                left: Math.min(scrollPercent-300-95,5)+'vw',
                top: '0vh',
            },
            paper42 :{
                left: Math.max(-scrollPercent+300+130,30)+'vw',
                top: '0vh',
            },
            paper43 :{
                left: Math.min(scrollPercent-300-98,2)+'vw',
                bottom: '0vh',
            },
            paper44 :{
                right: '0vw',
                bottom: Math.min(scrollPercent-300-100,0)+'vh',
            },

            });
        }
    }
 
    render() {
        return (
            <div className="main-container">
                <div className="cops-groups-title">
                    <h2>
                        CLUB OF PROGRAMMERS GROUPS
                    </h2>
                    <div>Any Description.../tagline or logo etc.. can be put here. </div>
                </div>
                <div className="group-list" >
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
                    <div className="group-list-item">
                        <div className="group-list-item-2-container">
                            <div className="group-list-item-2" id="head2">
                                <h2 >
                                    MACHINE LEARNING GROUP
                                </h2>
                                <div>Static content To be changed</div>
                            </div>
                            <Paper id="head21" className="paper paper1 paper21" style={this.state.paper21} zDepth={3}>
                                <div style={{margin: '15% 0 0 20%', position: 'absolute'}}>
                                    <h2>Stats <ActionTrendingUp/></h2>
                                    <li>59 Mentors</li>
                                    <li>513 Members</li>
                                    <li>1689 Followers</li>
                                    <small>still counting...</small>
                                </div>
                            </Paper>
                            <Paper id="head22" className="paper paper2 paper22" style={this.state.paper22} zDepth={3}>
                                <div style={{margin: '5% 0 0 10%', position: 'absolute'}}>
                                Neither Man, nor machine can replace its creator.<EditorFormatQuote />
                                </div>
                            </Paper>
                            <Paper id="head23" className="paper paper3 paper23" style={this.state.paper23} zDepth={3}>
                                <div style={{margin: '15% 0 0 10%', position: 'absolute'}}>
                                    <h2>Description</h2>
                                    <div>
                                        Welcome to our group of Machine Learning Enthusiasts !!! 
                                    </div>
                                </div>
                            </Paper>
                            <Paper id="head24" className="paper paper4 paper24" style={this.state.paper24} zDepth={3}>
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
                    <div className="group-list-item">
                        <div className="group-list-item-3-container">
                            <div className="group-list-item-3" id="head3">
                                <h2 >
                                    COMPETITIVE PROGRAMMING GROUP
                                </h2>
                                <div>Static content To be changed</div>
                            </div>
                            <Paper id="head31" className="paper paper1 paper31" style={this.state.paper31} zDepth={3}>
                                <div style={{margin: '15% 0 0 20%', position: 'absolute'}}>
                                    <h2>Stats <ActionTrendingUp/></h2>
                                    <li>59 Mentors</li>
                                    <li>513 Members</li>
                                    <li>1689 Followers</li>
                                    <small>still counting...</small>
                                </div>
                            </Paper>
                            <Paper id="head32" className="paper paper2 paper32" style={this.state.paper32} zDepth={3}>
                                <div style={{margin: '5% 0 0 10%', position: 'absolute'}}>
                                Programs must be written for people to read, and only<br/>incidentally for machines to execute.<EditorFormatQuote />
                                </div>
                            </Paper>
                            <Paper id="head33" className="paper paper3 paper33" style={this.state.paper33} zDepth={3}>
                                <div style={{margin: '15% 0 0 10%', position: 'absolute'}}>
                                    <h2>Description</h2>
                                    <div>
                                        Welcome to our group of Competitive Programers !!! 
                                    </div>
                                </div>
                            </Paper>
                            <Paper id="head34" className="paper paper4 paper34" style={this.state.paper34} zDepth={3}>
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
                    <div className="group-list-item">
                        <div className="group-list-item-4-container">
                            <div className="group-list-item-4" id="head4">
                                <h2 >
                                    INFORMATION SECURITY GROUP
                                </h2>
                                <div>Static content To be changed</div>
                            </div>
                            <Paper id="head41" className="paper paper1 paper41" style={this.state.paper41} zDepth={3}>
                                <div style={{margin: '15% 0 0 20%', position: 'absolute'}}>
                                    <h2>Stats <ActionTrendingUp/></h2>
                                    <li>59 Mentors</li>
                                    <li>513 Members</li>
                                    <li>1689 Followers</li>
                                    <small>still counting...</small>
                                </div>
                            </Paper>
                            <Paper id="head42" className="paper paper2 paper42" style={this.state.paper42} zDepth={3}>
                                <div style={{margin: '5% 0 0 10%', position: 'absolute'}}>
                                It takes 20 years to build a reputation and few minutes of<br/>cyber-incident to ruin it.<EditorFormatQuote />
                                </div>
                            </Paper>
                            <Paper id="head43" className="paper paper3 paper43" style={this.state.paper43} zDepth={3}>
                                <div style={{margin: '15% 0 0 10%', position: 'absolute'}}>
                                    <h2>Description</h2>
                                    <div>
                                        Welcome to our group of Hackers !!! 
                                    </div>
                                </div>
                            </Paper>
                            <Paper id="head44" className="paper paper4 paper44" style={this.state.paper44} zDepth={3}>
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
                </div>
            </div>
        );
    }
}

export default TeamMembers;
