import "./ErrorPage.css"; // Add your styles here or use inline styles
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="h1a">Oops!</h1>
        <h2 className="h2a">Something went wrong</h2>
        <p className="pa">
          The page you are looking for doesn't exist or an unexpected error has
          occurred.
        </p>
        <div className="error-actions">
          <button onClick={() => navigate("/")} className="btn-home">
            Go to Home
          </button>
          <button  className="btn-retry">
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
