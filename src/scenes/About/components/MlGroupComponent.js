import React, {Component} from 'react';
import './styles.GroupsComponent.css';
import Paper from 'material-ui/Paper';
import EditorFormatQuote from 'material-ui/svg-icons/editor/format-quote';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';

class MlGroupComponent extends Component{

    constructor(props) {
        super(props);
        this.state={
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
    }

    render() {
        return (

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
        );
    }
}

export default MlGroupComponent;
