import React, {Component} from 'react';

class AuthPage extends Component {
    constructor(props){
        super(props);
        this.emailEl = React.createRef();
        this.passwordEL = React.createRef();
    }

    submitHandler = () => {
        const email = this.emailEl.current.value;
        const password = this.passwordEL.current.value;

        if (email.trim().length === 0 || password.trim().length === 0){
            return ;
        }

    };

    render(){
        return (
            <form onSubmit={this.submitHandler}>
            <div>
                <label htmlFor="email">E-Mail</label>
                <input type="email" id="email" ref={this.emailEl} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref={this.passwordEL} />
            </div>
            <div>
                <button type="button">SignUp</button>
                <button type="Submit">Submit</button>
            </div>
            </form>
        )
    }
}