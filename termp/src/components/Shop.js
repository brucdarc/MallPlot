import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "./Header";
import web3 from "../web3";
import MallPlot from "../MallPlot";
import EcoCapCoin from "../EcoCapCoin";



class Shop extends React.Component{
    constructor(props){
        super(props);
        console.log("rendered shop");
        this.state={
            buttColor:"btn btn-md btn-default",
            holder:"pp",
            plotNum: this.props.floor * 100 + parseInt(this.props.Row-1) * 10 + parseInt(this.props.Collumn)-1,
            floorPrice:0
        };

        this.checkOwnership= this.checkOwnership.bind(this);
        this.getFloorPrice= this.getFloorPrice.bind(this);
        this.checkOwnership();
        this.getFloorPrice();
    }



    getFloorPrice = async () =>{
        try {

            let fp = await MallPlot.methods.getFloorPrice(this.props.floor).call();
            this.setState({
                floorPrice:fp
            });


        } catch (err) {
            console.log("ERROR IN SENDING TO CHAIN " + err);
        }

    }

    componentWillReceiveProps(nextProps){

        this.setState({plotNum: nextProps.floor * 100 + parseInt(nextProps.Row-1) * 10 + parseInt(nextProps.Collumn)-1});
        this.getFloorPrice();
        this.checkOwnership();

    }

    checkOwnership = async () =>{

        try {
            const accounts = await web3.eth.getAccounts();
            let hold = await MallPlot.methods.ownerOf( this.state.plotNum).call();
            this.setState({
                holder:hold
            });

            if(hold == "0x0000000000000000000000000000000000000000" && this.state.floorPrice != 0) {
                this.setState({
                    buttColor:"btn btn-md btn-success"
                });
            }
            else if(hold == accounts[0]){
                this.setState({
                    buttColor:"btn btn-md btn-primary"
                });
            }
            else{
                this.setState({
                    buttColor:"btn btn-md btn-danger"
                });
            }

        } catch (err) {
            console.log("ERROR IN SENDING TO CHAIN " + err);
        }

    }

    buyPlot = async event =>{
        if(this.state.buttColor == "btn btn-md btn-success") {
            event.preventDefault();
            try {
                const accounts = await web3.eth.getAccounts();
                await MallPlot.methods
                    .buyPlot(this.state.plotNum / 100, this.state.plotNum % 100) // contains the user account name
                    .send({
                        from: accounts[0],
                        value: this.state.floorPrice
                    });
                this.setState({});
            } catch (err) {
                console.log("ERROR IN SENDING TO CHAIN " + err);
            }
        }
    }



    render() {
        return (
            <Grid item xs={1}>
                <button id={'Available'} className={this.state.buttColor} style={{color:'white'}} onClick={this.buyPlot}>
                    <span>Shop {this.state.plotNum}</span>
                    <br></br>
                    <span>Current Bid: 111</span>
                </button>
                <br/>
            </Grid>
        );
    }
};

export default Shop;


