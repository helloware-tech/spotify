import { BrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <h1 style={{ color: "blue" }}>Hello world, friend!</h1>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
