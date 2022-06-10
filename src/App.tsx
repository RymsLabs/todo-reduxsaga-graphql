import React from "react";

import Header from "./components/Header";

class App extends React.PureComponent {
  render() {
    return (
      <main className="">
        <div className="w-[700px] m-[130px_auto] relative shadow-[0_25px_50px_0_rgba(0, 0, 0, 0.1)]">
          <Header />

          {/* <Footer/> */}
        </div>
      </main>
    );
  }
}

export default App;
