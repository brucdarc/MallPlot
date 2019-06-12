import React, { Component } from "react";
import web3 from "../web3"
import {Card, Form} from "semantic-ui-react";
import EcoCapCoin from "../EcoCapCoin";
import MallPlot from "../MallPlot";

class Transfer extends Component{

    constructor(props){
        super(props);
        this.state={
            recipient : "",
            tokenId: 0
        };

    }

    transfer = async event =>{
        console.log("EYYYYYY");
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            await MallPlot.methods
                .safeTransferFrom(accounts[0], this.state.recipient, this.state.tokenId) // contains the user account name
                .send({
                    from: accounts[0]
                });
            this.setState({
            });
        } catch (err) {
            console.log("ERROR IN SENDING TO CHAIN " + err);
            this.setState({
            });
        }
    }

    render() {
        return(
            <div>
                <h4>Transfer Plots</h4>
                <Form.Field>
                    <input
                        placeholder="Recipient Address"
                        onChange={event =>
                            this.setState({
                                recipient: event.target.value
                            })
                        }
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        placeholder="MallPlot ID"
                        onChange={event =>
                            this.setState({
                                tokenId: event.target.value
                            })
                        }
                    />
                </Form.Field>
                <br/>
                <button id={'setLocation'} className={'btn btn-md btn-success'} style={{color:'white'}} onClick={this.transfer}>
                    <span>Transfer Tokens</span>
                </button>
            </div>
        )
    }
};
export default Transfer;