import ReactDOM from "react-dom";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris Sev",
  location: "Las Vegas",
  foodType: "Everything",
  age: 33,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chris__sev",
  avatar:
    "https://res.cloudinary.com/betterdev/image/upload/v1624211301/chris_ge6pzx.jpg"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  const url = `https://twitter.com/${user.twitterUsername}`;

  return (
    <div className="App">
      {/* show user data here */}
      <div className="user-deets">
        {/* linked icon photo */}
        <a href={url}>
          <img src={user.avatar} alt={user.name} />
        </a>

        {/* linked username */}
        <h3>
          <a href={url}>{user.name}</a>
        </h3>

        <p>
          <strong>Location</strong>
          {user.location}
        </p>
        <p>
          <strong>Eats</strong>
          {user.foodtypes}
        </p>
        <p>
          <strong>Age</strong>
          {user.age}
        </p>
        <p>
          <strong>Likes</strong>
          {user.likes}
        </p>

        {/* linked twitter account/username */}
        <p>
          <strong>Twitter</strong>
          <a href={url}>@{user.twitterUsername}</a>
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
