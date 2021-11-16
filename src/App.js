import react from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import { categories } from "./constants/categories";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {categories.map(({ title, request, isLargeRow }, index) => (
        <Row
          key={index}
          title={title}
          fetchUrl={request}
          isLargeRow={isLargeRow}
        />
      ))}
    </div>
  );
}

export default App;
