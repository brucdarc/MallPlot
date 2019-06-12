import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shop from "./Shop";
import Badge from 'react-bootstrap/Badge'
import headerImage from "../resources/feet.png";


class HallwayRow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            NavTitle:"",
            NavColor:""

        };


    }
    render() {
        return (
            <Grid container item xs={12} spacing={4}>
                <Grid item xs={1}>
                    <Badge pill variant="dark">
                        Hallway
                    </Badge>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>
                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>



            </Grid>
        );
    }
};

export default HallwayRow;


