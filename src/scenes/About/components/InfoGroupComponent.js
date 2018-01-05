import React, {Component} from 'react';
import './styles.GroupsComponent.css';
import Paper from 'material-ui/Paper';
import EditorFormatQuote from 'material-ui/svg-icons/editor/format-quote';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';

class InfoGroupComponent extends Component{

    constructor(props) {
        super(props);
        this.state={

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
        );
    }
}

export default InfoGroupComponent;

