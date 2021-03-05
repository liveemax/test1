import React, {Component} from "react";
import classes from "./header.module.scss"
import {Button, Form} from "react-bootstrap";
import {HeaderDispatch, HeaderProps} from "./HeaderContainer";



export class Header extends Component<HeaderDispatch & HeaderProps> {
    state={
        inputValue:``,
        textInp:React.createRef() as any
    }
    componentDidMount() {
        this.props.setToolTip("ad")
    }
    render() {
        return (
            <div className={"container-fluid"}>
                <header>
                    <Form className={"d-flex pt-2 align-items-center"+" "+classes.form}>
                        <Form.Control placeholder="Enter city" ref={this.state.textInp} onChange={
                            (e:any)=>{
                                console.log(this.state.textInp.current.value)
                        }
                        }/>
                        <Button variant="primary">Set</Button>
                        <Button variant="outline-secondary p-1">Update every:</Button>
                    </Form>
                </header>
            </div>
        )
    }
}





