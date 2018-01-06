import React,{Component} from 'react';
import projectComponents from './projectComponents'
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import './project.css'
  class project extends Component{ 
    constructor(){
      super(props);
    }
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
  const styleRight = {
    height: 450,
    width: 362.5,
    margin: "100px 25px 100px 100px",
    textAlign:'center',
    display: 'inline-block',
    padding: 0,
    float: "left",
  };
  const styleLeft = {
    height: 450,
    width: 362.5,
    margin: "100px 100px 100px 50px",
    textAlign:'center',
    display: 'inline-block',
    padding: 0,
    float: "left",
  };
  const styleDiv = {
      width:1000,
      marginLeft:350,
      height:4000,
      backgroundColor:"#f9f9fa"
  }
  const styles = {
      chip: {
        marginLeft: 14.237,
        marginRight:14.237
      },
      button:{
          marginLeft:10,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft:15,
        paddingRight:15,
        margin:4
      },
      Python:{
          backgroundColor:"#41a9f4",
          marginLeft: 14.237,
          marginRight:14.237,
          cursor:"pointer"
      },
      Django:{
          backgroundColor:"#f48541",
          marginLeft: 14.237,
          marginRight:14.237,
          cursor:"pointer"
      },
      JavaScript:{
          backgroundColor:"#f46141",
          marginLeft: 14.237,
          marginRight:14.237,
          cursor:"pointer"
      },
      Jquery:{
          backgroundColor:"#f4df41",
          marginLeft: 14.237,
          marginRight:14.237,
          cursor:"pointer"
      },
      HTML:{
          backgroundColor:"#f4a041",
          marginLeft: 14.237,
          marginRight:14.237,
          cursor:"pointer"
      },
      CSS:{
          backgroundColor:"#415bf4",
          marginLeft: 14.237,
          marginRight:14.237,
          cursor:"pointer"
      }
    };
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
        <projectComponents click={this.handleOpen}/>
    </div>
    <div style={{marginTop:800}}>
        <h1 style={{marginTop:0,marginLeft:50}} className="projects" id="ai">ARTIFICIAL INTELLIGENCE</h1>
        <projectComponents click={this.handleOpen}/>
    </div>
    <div style={{marginTop:800}}>
        <h1 style={{marginTop:0,marginLeft:50}} className="projects" id="is">INFORMATION SECURITY</h1>
        <projectComponents click={this.handleOpen}/>
    </div>
    <div style={{marginTop:800}}>
        <h1 style={{marginTop:0,marginLeft:50}} className="projects" id="web">WEB DEVELOPMENT</h1>
        <projectComponents click={this.handleOpen}/>
    </div>
    <div style={{marginTop:800}}>
       <h1 style={{marginTop:0,marginLeft:50}}  className="projects"  id="app">ANDROID DEVELOPMENT</h1>
       <projectComponents click={this.handleOpen}/>
    </div>
  </div>)
  }
  }

export default project;