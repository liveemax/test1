import {Component} from "react";
import classes from "./footer.module.scss"


export class Footer extends Component<{}> {
    render() {
        return (
            <div className={classes.footer}>"All right reserved"</div>
        )
    }
}


