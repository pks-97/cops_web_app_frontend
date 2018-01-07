import React, {Component} from 'react';
import './styles.GroupsComponent.css';
import Paper from 'material-ui/Paper';
import EditorFormatQuote from 'material-ui/svg-icons/editor/format-quote';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';

class CpGroupComponent extends Component{

    constructor(props) {
        super(props);
        this.state={

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
    }

    render() {
        return (

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
        );
    }
}

export default CpGroupComponent;
