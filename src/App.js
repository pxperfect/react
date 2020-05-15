// React.
import React from 'react';
// Components.
import Layout from "./components/Layout/Layout";
// Containers.
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
// Common styles.

function App() {
  return (
      <Layout>
          <BurgerBuilder />
      </Layout>
  );
}

export default App;
