import React, {Component} from "react";
import {HeaderDispatch, HeaderProps} from "./HeaderContainer";
import {Field, Form} from "react-final-form";
import classes from "./header.module.scss"
import {Button, Spinner} from "react-bootstrap";


export class Header extends Component<HeaderDispatch & HeaderProps> {
    state = {
        inputValue: ``,
        updateInterval: ["none", "5 sec", "30 sec", "60 sec"],
        currentIndex: 0,
        spinner: true
    }

    tick(observeCity: (submit: string) => void) {
        if (this.state.currentIndex) {
            let ms = Number(this.state.updateInterval[this.state.currentIndex].split(" ")[0])
            let timerId = setInterval(() => this.update(observeCity), ms * 1000);
            localStorage.setItem("timerId", String(timerId))
        }
    }

    update(observeCity: (submit: string) => void) {
        localStorage.getItem("cityList")?.split(",").map((el) => {
            if (el) {
                observeCity(el)
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
        this.state.spinner = false
        if (localStorage.getItem("timerId")) {
            clearTimeout(Number(localStorage.getItem("timerId")))
            localStorage.removeItem("timerId")
        }
        this.tick(this.props.addCity)
        if (prevState.inputValue !== this.state.inputValue) {
            this.setState({spinner: true})
            this.props.setToolTip(this.state.inputValue)
        }
    }

    render() {

        return (
            <div className={"container-fluid"}>
                <header>
                    <Form
                        onSubmit={this.onSubmit}
                        validate={values => {
                            const errors = {} as any
                            return errors
                        }}
                        render={({handleSubmit, form, submitting, pristine, values}) => (
                            <form autoComplete={"off"}
                                  onSubmit={handleSubmit}
                                  className={"container-fluid d-flex align-items-center" + " " + classes.root}>
                                <Field name="input">
                                    {({input, meta}) => (
                                        <div className={`container-fluid d-flex flex-column ${classes.formInput}`}>
                                            <input  {...input} type="text" placeholder="Enter city"/>
                                            {values.input !== undefined
                                            && values.input !== this.state.inputValue && this.setState({inputValue: values.input})
                                            }
                                            {this.state.spinner ?
                                                <React.Fragment>
                                                    {values.input !== undefined
                                                    && values.input!.length > 2 && this.state.spinner &&
                                                    <div className={`d-flex container-fluid `}>
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


