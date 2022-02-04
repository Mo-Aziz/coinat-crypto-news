import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div>
        {/* mapping objects from Api or the icons */}
        {/* {Object.entries(requests).map(([key, { title, url }]) => (
          <h2>{title}</h2>
        ))} */}
      </div>
    </nav>
  );
}

export default Nav;
