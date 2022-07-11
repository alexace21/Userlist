import { useState, useEffect } from 'react';

import * as userService from './services/userService';

import { Header } from './components/common/Header';
import { Footer } from './components/Footer';
import { Search } from './components/search/Search';
import { GridSection } from './components/grid-section/GridSection';
import './App.css';


function App() {
  const [users, setUsers] = useState([]); //users

  useEffect(() => {
      userService.getAll()
        .then(users => setUsers(users))

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
