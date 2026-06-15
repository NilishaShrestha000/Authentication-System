import { useNavigate, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()

    return (
        <div className="error-fallback">
            <h1>Something went Wrong !!!</h1>
            <p>{error?.statusText || error?.maessage}</p>
            <button onClick={() => navigate('/')}> Go back Home </button>
        </div>
    )
}
export default ErrorPage;