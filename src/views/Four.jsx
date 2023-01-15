import { Link } from "react-router-dom";
import { useEffect } from "react";

const Four = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="four">
      <p>404</p>
      Page not found.
      <Link to="/">
        <span>Back to home</span>
      </Link>
    </div>
  );
};

export default Four;
