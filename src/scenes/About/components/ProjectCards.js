import React from 'react';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
const styles = {
    chip: {
      marginLeft: 14.237,
      marginRight:14.237
    },
    button:{
      marginLeft:136.595,
      marginRight:126.595,
      marginTop:8,
      backgroundColor:"white",
      color:"black",
      fontWeight:"bold",
      border:"2px solid black",
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
  paddingLeft:80,
  paddingRight:80,
  height:220
  }
  const styleDiv1 = {
    paddingLeft:0,
    paddingRight:0,
    }
const ProjectCards=(props)=>{
    return(
        <div>
        <Paper style={styleLeft} zDepth={3}>
        <div style={styleDiv}>
        <h2>ACAD-SEARCH</h2>
        <hr style={{color:"#f4ee41"}}/>
        <p>
        A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django
        </p>
        </div>
        <div style={styleDiv1}>
        <p style={{marginBottom:5}}>Mentored By</p>
        <p style={{marginTop:5}}>Anuj Srivastava</p>
        </div>
        <div style={styles.wrapper}>
        <Chip
              style={styles.Python}
            >
              Python
            </Chip>
            <Chip
              style={styles.JavaScript}
            >
              JavaScript
            </Chip>
            <Chip
              style={styles.Django}
            >
              Django
            </Chip>
            </div>
            <div style={styles.wrapper}>
        <Chip
              style={styles.Jquery}
            >
              Jquery
            </Chip>
            <Chip
              style={styles.HTML}
            >
              HTML
            </Chip>
            <Chip
              style={styles.CSS}
            >
              CSS
            </Chip>
            </div>
            <div style={styles.button}>
            <RaisedButton label="Details" onClick={props.click}>
            </RaisedButton>
                </div>
        </Paper>
         <Paper style={styleRight} zDepth={3}>
         <div style={styleDiv}>
         <h2>ACAD-SEARCH</h2>
         <hr style={{color:"#f4ee41"}}/>
         <p>
         A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django
         </p>
         </div>
         <div style={styleDiv1}>
         <p style={{marginBottom:5}}>Mentored By</p>
         <p style={{marginTop:5}}>Anuj Srivastava</p>
         </div>
         <div style={styles.wrapper}>
         <Chip
               style={styles.Python}
             >
               Python
             </Chip>
             <Chip
               style={styles.JavaScript}
             >
               JavaScript
             </Chip>
             <Chip
               style={styles.Django}
             >
               Django
             </Chip>
             </div>
             <div style={styles.wrapper}>
         <Chip
               style={styles.Jquery}
             >
               Jquery
             </Chip>
             <Chip
               style={styles.HTML}
             >
               HTML
             </Chip>
             <Chip
               style={styles.CSS}
             >
               CSS
             </Chip>
             </div>
             <div style={styles.button}>
             <RaisedButton label="Details" onClick={props.click}>
             </RaisedButton>
                 </div>
         </Paper>
         </div>
        )
    }
    export default ProjectCards;
