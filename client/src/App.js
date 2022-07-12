import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { GridSection } from './components/grid-section/GridSection';
import './App.css';


function App() {

  return (
    <div>
      <Header />

      <main className='main'>
        <section className="card users-container">
          <Search />

          <GridSection />

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
