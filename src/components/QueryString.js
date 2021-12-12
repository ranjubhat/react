import React from "react";
import { useHistory, Link, useLocation } from "react-router-dom";

function QueryString(props) {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(useLocation().search);
  console.log(query.get("name"));
  return (
    <div>
      <ul>
        <li>
          <Link to="/account?name=foo">Foo User</Link>
        </li>
        <li>
          <Link to="/account?name=bar">Bar User</Link>
        </li>
        <li>
          <Link to="/account?name=baz">Baz User</Link>
        </li>
      </ul>
    </div>
  );
}

export default QueryString;
