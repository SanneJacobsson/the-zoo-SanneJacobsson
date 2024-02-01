import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Hem</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Djur</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
