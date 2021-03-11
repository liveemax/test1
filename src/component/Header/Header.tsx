import React, {Component} from "react";
import {HeaderDispatch, HeaderProps} from "./HeaderContainer";
import {Field, Form} from "react-final-form";
import classes from "./header.module.scss"
import {Button, Spinner} from "react-bootstrap";
import {cancel} from "../../api/apiCity/header-cityApi";

export class Header extends Component<HeaderDispatch & HeaderProps> {
    state = {
        updateInterval: ["none", "5 sec", "30 sec", "60 sec"],
        currentIndex: 0,
        spinner: false
    }

    tick(addCity: (submit: string) => void) {
        if (this.state.currentIndex) {
            let ms = Number(this.state.updateInterval[this.state.currentIndex].split(" ")[0])
            let timerId = setInterval(() => this.update(addCity), ms * 1000);
            localStorage.setItem("timerId", String(timerId))
        }
    }

    update(addCity: (submit: string) => void) {
        localStorage.getItem("cityList")?.split(",").map((el) => {
            if (el) {
                addCity(el)
            }
        })
    }

    onSubmit = (submit: { input: string }, form: { reset: () => void }) => {
        form.reset()
        this.props.addCity(submit.input)
        this.props.setToolTip("")
        this.forceUpdate()
    }

    onClick() {
        if ((this.state.updateInterval.length - 1) === this.state.currentIndex)
            this.setState({currentIndex: 0})
        else
            this.setState({currentIndex: ++this.state.currentIndex})

        if (this.state.currentIndex === 3) {
            clearTimeout(Number(localStorage.getItem("timerId")))
            localStorage.removeItem("timerId")
        }
    }

    componentDidUpdate(prevProps: Readonly<HeaderDispatch & HeaderProps>, prevState: any, snapshot?: any) {
        if (localStorage.getItem("timerId")) {
            clearTimeout(Number(localStorage.getItem("timerId")))
            localStorage.removeItem("timerId")
        }
        this.tick(this.props.addCity)
        if(prevProps.tooltip!==this.props.tooltip) {
            this.setState({spinner: false})
        }
    }
    onKeyDown(e:any){
        //удаляем предыдущий запрос
        if(this.state.spinner) {
            cancel("cancel");
            this.setState({spinner: false})
            this.props.setToolTip(e.currentTarget.value+e.key)
            return
        }
        //делаем запрос
        if(e.key.split("").length===1&&e.currentTarget.value.length>1)
        {
            this.setState({spinner: true})
            this.props.setToolTip(e.currentTarget.value+e.key)
        }
    }
    render() {

        return (
            <div className={`${classes.root} container-fluid`}>
                <header>
                    <Form
                        onSubmit={this.onSubmit}
                        validate={values => {
                            return {}
                        }}
                        render={({handleSubmit, submitting, pristine, values}) => (
                            <form autoComplete={"off"}
                                  onSubmit={handleSubmit}
                                  className={"container-fluid d-flex align-items-center"}>
                                <Field name="input">
                                    {({input}) => (
                                        <div className={`container-fluid d-flex flex-column ${classes.formInput}`}>
                                            <input onKeyDown={(e)=>this.onKeyDown(e)}
                                                {...input} type="text" placeholder="Enter city"/>
                                            {this.state.spinner ?
                                                <React.Fragment>
                                                    {values.input !== undefined
                                                    && values.input!.length > 2 && this.state.spinner &&
													<div className={`${classes.formInputButton} d-flex container-fluid `}>
														<Spinner animation="border" variant="primary"
																 className={"d-inline mx-auto"} as={"p"}/>
													</div>}
                                                </React.Fragment> :
                                                <div
                                                    className={`${classes.formInputButton} d-flex flex-column container-fluid`}>
                                                    {this.props.tooltip?.map((el, index) => {
                                                        return (<input onClick={(e) => {
                                                            values.input = el.split(",")[0]
                                                            this.forceUpdate()
                                                        }} type={"button"} id={`${index}`} key={el + index}
                                                                       value={el}/>)
                                                    })}
                                                </div>}
                                        </div>

                                    )}
                                </Field>
                                <div className={classes.formLastButton}>
                                    <Button onSubmit={handleSubmit} type="submit" disabled={submitting || pristine}
                                            variant="secondary">Submit
                                    </Button>
                                    <Button onClick={(e) => this.onClick()}
                                            variant="secondary">Update:{`${this.state.updateInterval[this.state.currentIndex]}`}</Button>
                                </div>
                            </form>
                        )}
                    />
                </header>
            </div>
        )
    }
}


