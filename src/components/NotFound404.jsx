import {  Link  } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">
                <button>Go back to home</button>
            </Link>
        </div>
        
    )

}