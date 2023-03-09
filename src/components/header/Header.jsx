import React from "react";
import { useHistory } from 'react-router-dom';
const Header = () => {
  const history = useHistory();
  return (
    <div className="container header-container">
      <div className="row">
        <div className="col-1" onClick={() => history.push("/")}>
          <h1>Podcast</h1>
        </div>

      </div>
    </div>
  );
}

export default Header;