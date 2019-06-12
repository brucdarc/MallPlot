import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shop from "./Shop";
import ShopRow from "./ShopRow";
import HallwayRow from "./HallwayRow";
import {Form} from "semantic-ui-react";
import Badge from "react-bootstrap/Badge";
import MallPlot from "../MallPlot";
import Dropdown from 'react-bootstrap/Dropdown'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


class NestedGrid extends React.Component{
    constructor(props){
        super(props);
        this.state={
            formValue: 1,
            floor: 1,
            floorPrice: 0
        };

        this.changeFloor = this.changeFloor.bind(this);
        this.changeFormValue = this.changeFormValue.bind(this);
        this.getFloorPrice = this.getFloorPrice.bind(this);
        this.getFloorPrice();
    }

    changeFloor(){
        this.setState({
            floor: this.state.formValue
        }, () => this.getFloorPrice())

    }

    changeFormValue(val){
        this.setState({
            formValue: val
        })
    }

    getFloorPrice = async () =>{
        try {

            let fp = await MallPlot.methods.getFloorPrice(this.state.floor).call();
            console.log('hi');
            this.setState({
                floorPrice:fp
            });
            console.log('hi2');


        } catch (err) {
            console.log("ERROR IN SENDING TO CHAIN " + err);
        }

    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({}), 5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }





    render() {

        let floorPriceForSale = this.state.floorPrice;

        if (floorPriceForSale == 0) {
            floorPriceForSale = "Not Currently For Sale";
        }
        else {
            floorPriceForSale = floorPriceForSale + " Wei"
        }

        return (
            <div>
            <h1>Buy A Mall Plot</h1>
            <Form.Field>
                <input
                    placeholder={"Floor"}
                    onChange={event => this.changeFormValue(event.target.value)}
                />
                {' '}
                <button id={'setLocation'} className={'btn btn-md btn-success'} style={{color:'white'}} onClick={this.changeFloor}>
                    <span>Change Floor</span>
                </button>
            </Form.Field>
                <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Floor 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Floor 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Floor 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h2>Floor {this.state.floor},  Plot Price: {floorPriceForSale}</h2>
            <br/>
            <Grid container spacing={3}>
                <Grid container item xs={12} spacing={4}>
                    <Grid item xs={1}>
                        Row/Collumn

                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Column 1
                        </Badge>
                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Column 2
                        </Badge>
                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Column 3
                        </Badge>
                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Column 4
                        </Badge>
                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Column 5
                        </Badge>
                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Hallway
                        </Badge>
                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Column 6
                        </Badge>
                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Column 7
                        </Badge>
                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Column 8
                        </Badge>
                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Column 9
                        </Badge>
                    </Grid>
                    <Grid item xs={1}>
                        <Badge pill variant="dark">
                            Column 10
                        </Badge>
                    </Grid>

                </Grid>
                <ShopRow Row = "1" floor = {this.state.floor}/>
                <HallwayRow/>
                <ShopRow Row = "2" floor = {this.state.floor}/>
                <ShopRow Row = "3" floor = {this.state.floor}/>
                <HallwayRow/>
                <ShopRow Row = "4" floor = {this.state.floor}/>
                <ShopRow Row = "5" floor = {this.state.floor}/>
                <HallwayRow/>
                <ShopRow Row = "6" floor = {this.state.floor}/>
                <ShopRow Row = "7" floor = {this.state.floor}/>
                <HallwayRow/>
                <ShopRow Row = "8" floor = {this.state.floor}/>
                <ShopRow Row = "9" floor = {this.state.floor}/>
                <HallwayRow/>
                <ShopRow Row = "10" floor = {this.state.floor}/>
            </Grid>
            <div>
                <h2>
                    Shop Color Index {" "}
                    <button id={'Available'} className={"btn btn-md btn-success"} style={{color:'white'}}>
                        <span>Available</span>
                    </button>
                    {" "}
                    <button id={'Available'} className={"btn btn-md btn-primary"} style={{color:'white'}}>
                        <span>Owned By You</span>
                    </button>
                    {" "}
                    <button id={'Available'} className={"btn btn-md btn-danger"} style={{color:'white'}}>
                        <span>Sold or Unavailable</span>
                    </button>
                    {" "}
                    <button id={'Available'} className={"btn btn-md btn-default"} style={{color:'white'}}>
                        <span>Could Not Load Information</span>
                    </button>
                </h2>
            </div>
            </div>

        );
    }
};

export default NestedGrid;