import React, {Component} from "react";
import {HeaderDispatch, HeaderProps} from "./HeaderContainer";
import {Field, Form} from "react-final-form";
import classes from "./header.module.scss"
import {Button} from "react-bootstrap";


export class Header extends Component<HeaderDispatch & HeaderProps> {
    state = {
        inputValue: ``,
        showA: true,
        refToolTip:React.createRef() as any,
        refInput:React.createRef() as any
    }
     onSubmit = (submit: {input:string},form:{reset:()=>void},) => {
        form.reset()
         this.props.setToolTip("")
         this.forceUpdate()
    }
    componentDidUpdate(prevProps: Readonly<HeaderDispatch & HeaderProps>, prevState: any, snapshot?: any) {
        if(prevState.inputValue!==this.state.inputValue)
        this.props.setToolTip(this.state.inputValue)
        console.log(this.props.tooltip)
    }
    render() {
        return (
            <div className={"container-fluid"}>
                <header>
                    <Form
                        onSubmit={this.onSubmit}
                        validate={values => {
                            const errors = {} as any
                            if (!values.input) {
                                errors.input = 'Required'
                            }
                            return errors
                        }}
                        render={({handleSubmit, form, submitting, pristine, values}) => (
                            <form autoComplete={"off"}
                                  onSubmit={handleSubmit}
                                  className={"container-fluid d-flex align-items-center" + " " + classes.root}>
                                <Field name="input">
                                    {({input, meta}) => (
                                        <div className={`container-fluid d-flex flex-column ${classes.formInput}`}>
                                            <input ref={this.state.refInput} {...input} type="text" placeholder="Enter city"/>
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                            {values.input !== undefined
                                            && values.input!==this.state.inputValue && this.setState({inputValue:values.input})
                                            }
                                            <div ref={this.state.refToolTip} className={`${classes.formInputButton} d-flex flex-column container-fluid`}>
                                                {this.props.tooltip?.map((el,index)=>{
                                                    return (<input onClick={(e)=>{
                                                        values.input=el
                                                        this.forceUpdate()
                                                    }}  type={"button"} id={`${index}`} key={el+index} value={el}/>)
                                                })}
                                            </div>
                                        </div>

                                    )}
                                </Field>
                                <div className={classes.formLastButton}>
                                    <Button onSubmit={handleSubmit} type="submit" disabled={submitting || pristine}
                                            variant="secondary">Submit
                                    </Button>
                                    <Button variant="secondary">Update:every 5 sec</Button>
                                    <pre>{JSON.stringify(values)}</pre>

                                </div>
                            </form>
                        )}
                    />
                </header>
            </div>
        )
    }
}


// <Form className={"d-flex pt-2 align-items-center"+" "+classes.form}>
//     <Form.Control placeholder="Enter city" value={this.state.inputValue} onChange={
//         (e:any)=>{
//             console.log(e.nativeEvent.data)
//             return(this.setState({inputValue:this.state.inputValue+e.nativeEvent.data}))
//         }
//     }/>
//     <Button variant="primary">Set</Button>
//     <Button variant="outline-secondary p-1">Update every:</Button>
// </Form>