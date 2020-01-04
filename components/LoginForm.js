

const LoginForm = (props) => {
    console.log(props)
    const { username, password } = props.state;
     return (
        <form onSubmit={props.submit}>
                <label>Username
                    <input 
                    type="text"
                    className="username"
                    name="username"
                    value={username}
                    onChange={props.change}
                    />
                </label>
                <label>Password
                    <input 
                    type="password"
                    className="password"
                    name="password"
                    value={password}
                    onChange={props.change}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
     );
 }   

export default LoginForm;