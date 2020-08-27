import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {/* Posts */}
      <Post
        username="cleverQazi"
        imageUrl="https://wallpapercave.com/wp/wp4923981.jpg"
        caption="wow! It Works..!"
      ></Post>

      <Post
        username="ssssAghna"
        imageUrl="https://images.unsplash.com/photo-1598432908102-ce6767f7a264?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80"
        caption="This is really Dope!"
      ></Post>

      <Post
        username="amaanath"
        imageUrl="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        caption="Great to see that people are working on this build"
      ></Post>

      {/* Posts */}
    </div>
  );
}

export default App;
