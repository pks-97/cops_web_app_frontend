import './components/ProjectComponents.css'
import React,{Component} from 'react';
import AllProjects from './components/AllProjects';
class Project extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}
  state={
    scroll:false,
    color:"#ff1ad9",
    text_color:["white","black","black","black","black"],
  }
  clickHandler=(idScroll)=>{
    document.getElementById(idScroll).scrollIntoView({
      behavior:"smooth"
    })
  }
  handleScroll=(event)=> {
    var x=document.documentElement.scrollTop;
    var y=document.body.scrollTop;
     if((y > 3300 || x > 3300)){ 
      this.setState({
        scroll:true,
        color:"#f47a42",
        text_color:["black","black","black","black","white"]
      })
    }
    else if((y > 2500 || x > 2500)){
      this.setState({
        color:"#ff9400",
        text_color:["black","black","black","white","black"]
      })
    }
    else if((y > 1600 || x > 1600)){
      this.setState({
        color:"#ff30b2",
        text_color:["black","black","white","black","black"]
      })
    }

    else if((y > 900 || x > 900)){
      this.setState({
        color:"#ef62d8",
        text_color:["black","white","black","black","black"]
      })
    }
    else if((y > 500 || x > 500)){
      
      this.setState({
        scroll:true,
        color:"#ff1ad9",
        text_color:["white","black","black","black","black"]
      })
    }
    else{
      this.setState({
        scroll:false
      })
    }
    }
  render(){
    const styleDiv={
      float:'left',
      height:690,
      backgroundColor:this.state.color,
      width:350,
      display:"flex",
      flexDirection:"coloumn",
      flexFlow:"coloumn wrap",
      position:"relative"
    }
  if(this.state.scroll)
  {  
    styleDiv.top=0;
    styleDiv.position="fixed";
  }
  return(
  <div>
  <div  style={{height:500,marginTop:0}}>
  <h1 style={{margin:0}}>Heading</h1>
  <h1 style={{marginBottom:0}}>Description</h1>
  </div>
  <div style={styleDiv}>
  <div>
    <h1  style={{padding:"25px 8px 25px 60px",color:"white",cursor:"pointer"}} className="head" >
      PROJECTS
      </h1>
      <h2 style={{paddingLeft:40,color:this.state.text_color[0],cursor:"pointer"}} className="list" onClick={()=>this.clickHandler("ml")}>
      1.MACHINE LEARNING
        </h2>
      <h2 style={{paddingLeft:40,color:this.state.text_color[1],cursor:"pointer"}} className="list" onClick={()=>this.clickHandler("ai")} >
      2.ARTIFICIAL INTELLIGENCE
        </h2>
      <h2  style={{paddingLeft:40,color:this.state.text_color[2],cursor:"pointer"}} className="list" onClick={()=>this.clickHandler("is")}>
      3.INFORMATION SECURITY
        </h2>
      <h2  style={{paddingLeft:40,color:this.state.text_color[3],cursor:"pointer"}} className="list" onClick={()=>this.clickHandler("web")}>
      4.WEB DEVELOPMENT
        </h2>
      <h2  style={{paddingLeft:40,color:this.state.text_color[4],cursor:"pointer"}} className="list" onClick={()=>this.clickHandler("app")}>
      5.APP DEVELOPMENT
        </h2>
  </div>
  </div>
    <AllProjects/></div>)}
}
export default Project;
