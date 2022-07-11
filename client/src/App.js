import { Header } from './components/common/Header';
import './App.css';
import { Footer } from './components/Footer';
import { Search } from './components/search/Search';
import { GridSection } from './components/grid-section/GridSection';
import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:3005/api';
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/users`)
      .then(res => res.json())
      .then(result => {

        setUsers(result.users);
  })
}, []);
  console.log(users);

return (
  <div>
    <Header />

    <main className='main'>
      <section className="card users-container">
        <Search />

        <GridSection users={users} />

      </section>
    </main>

    <Footer />
  </div>
);
}

export default App;
