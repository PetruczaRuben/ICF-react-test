import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ArtworkList from "./pages/ArtworkList";
import Bookmarks from "./pages/Bookmarks";

// NOTE: the codebase regarding file structure and prop drilling is a bit messy.
// It turned out this way, because I currently have to work on 6 other take home assignments, and therefore I could only allocate 4-5 hours of work into this project.
// I didn't use redux, felt like it would be a bit of an overkill for this type of application. + I work way faster/more comfortable with the basic useState hook, though I'm actively improving my redux skills.
// If I had more time I definitely would use redux/useContext, to eliminate prop drilling
//I just wanted to clarify these things, and any feedback on my code is well appreciated! Have a nice day!:)

export default function Index() {
  const [bookmarked, setBookmarked] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <ArtworkList
                bookmarked={bookmarked}
                setBookmarked={setBookmarked}
              />
            }
          />
          <Route
            path="bookmarks"
            element={
              <Bookmarks
                bookmarked={bookmarked}
                setBookmarked={setBookmarked}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
