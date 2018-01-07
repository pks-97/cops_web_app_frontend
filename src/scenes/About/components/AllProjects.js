import React,{Component} from 'react';
import ProjectCards from './ProjectCards'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import './ProjectComponents.css'
  class AllProjects extends Component{ 
    state = {
      open: false,
    };
  
    handleOpen = () => {
      this.setState({open: true});
    };
  
    handleClose = () => {
      this.setState({open: false});
    };
  render(){
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={this.handleClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onClick={this.handleClose}
    />,
  ];
  const styleDiv = {
      width:1000,
      marginLeft:350,
      height:4000,
      backgroundColor:"#f9f9fa"
  }
  const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
    height:'100%',
    maxHeight:'none'
  };
  return(
  <div style={styleDiv}>
        <Dialog 
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleClose}
        >
          Some Description about the project
        </Dialog>
    <div>
        <h1 style={{marginTop:0,marginLeft:50}} className="projects" id="ml">MACHINE LEARNING</h1>
        <ProjectCards click={this.handleOpen}/>
    </div>
    <div style={{marginTop:800}}>
        <h1 style={{marginTop:0,marginLeft:50}} className="projects" id="ai">ARTIFICIAL INTELLIGENCE</h1>
        <ProjectCards click={this.handleOpen}/>
    </div>
    <div style={{marginTop:800}}>
        <h1 style={{marginTop:0,marginLeft:50}} className="projects" id="is">INFORMATION SECURITY</h1>
        <ProjectCards click={this.handleOpen}/>
    </div>
    <div style={{marginTop:800}}>
        <h1 style={{marginTop:0,marginLeft:50}} className="projects" id="web">WEB DEVELOPMENT</h1>
        <ProjectCards click={this.handleOpen}/>
    </div>
    <div style={{marginTop:800}}>
       <h1 style={{marginTop:0,marginLeft:50}}  className="projects"  id="app">ANDROID DEVELOPMENT</h1>
        <ProjectCards click={this.handleOpen}/>
    </div>
  </div>)
  }
  }

export default AllProjects;