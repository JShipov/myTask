import {Navigate} from "react-router-dom";
import {useOktaAuth} from "@okta/okta-react";
import OktaSignIn from "./OktaSignIn";


const LoginWidget = ({config}) => {
    const {oktaAuth, authState} = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) => {
        console.log('Sign in error: ', err);
    }

    return authState.isAuthenticated ? (
        <Navigate to={{ pathname: "/" }}/>)
        : (<div>
            <img
                className="login-image"
                src={require("/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/Login.png")}
                alt="Your image description"
            />
                <OktaSignIn config={config} onSuccess={onSuccess} onError={onError} />
        </div>
    );
};
export default LoginWidget;
//src={require("/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/Login.png")}