import {Component} from "react";

export class Header extends Component<{}> {
    render() {
        return (
            <div style={{display:"flex",justifyContent:"center"}}>
                <header>
                    <div>
                        <div>
                            <form><input/>
                            <input/>
                            </form>
                        </div>
                        <div>
                            <button></button>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}


