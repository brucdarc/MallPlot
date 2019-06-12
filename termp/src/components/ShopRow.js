import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shop from "./Shop";
import Badge from 'react-bootstrap/Badge'
import headerImage from "../resources/feet.png";


class ShopRow extends React.Component{
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
                        Row {this.props.Row}
                    </Badge>
                </Grid>

                <Shop Row = {this.props.Row} Collumn = "1" floor = {this.props.floor}/>
                <Shop Row = {this.props.Row} Collumn = "2" floor = {this.props.floor}/>
                <Shop Row = {this.props.Row} Collumn = "3" floor = {this.props.floor}/>
                <Shop Row = {this.props.Row} Collumn = "4" floor = {this.props.floor}/>
                <Shop Row = {this.props.Row} Collumn = "5" floor = {this.props.floor}/>

                <Grid item xs={1}>
                    <img src={headerImage} style={{border:'0',width:'50%'}}/>
                </Grid>


                <Shop Row = {this.props.Row} Collumn = "6" floor = {this.props.floor}/>
                <Shop Row = {this.props.Row} Collumn = "7" floor = {this.props.floor}/>
                <Shop Row = {this.props.Row} Collumn = "8" floor = {this.props.floor}/>
                <Shop Row = {this.props.Row} Collumn = "9" floor = {this.props.floor}/>
                <Shop Row = {this.props.Row} Collumn = "10" floor = {this.props.floor}/>
            </Grid>
        );
    }
};

export default ShopRow;


