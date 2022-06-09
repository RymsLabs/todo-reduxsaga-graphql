import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.PureComponent {
  render() {
    return (
      <main className=''>
        <div className="w-[700px] my-32 mx-auto relative">
          <Header />
          <Footer />
        </div>
      </main>
    );
  }

}

export default App;
