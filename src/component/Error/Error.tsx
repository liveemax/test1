import React, {Component} from "react";
import { Button, Modal} from "react-bootstrap";
import classes from "./error.module.scss";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {closeErr} from "../../redux/headerReducer";

type ErrorProps={
    error:string
}
type ErrorDispatch={
    closeErr:()=>void
}
class Err extends Component<ErrorProps&ErrorDispatch> {
    render() {
        return (
            <Modal className={classes.root} show={this.props.error.length>1} animation={false} centered={true}>
                <Modal.Body className={classes.body}>{this.props.error}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(e)=>this.props.closeErr()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps=(state:AppStateType)=>({
    error:state.header.error
})
export const Errorr=connect(mapStateToProps,{closeErr})(Err)