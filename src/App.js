import { useState, useEffect } from 'react';
import PaginationControlled from './components/Pagination';
import DenseTable from './components/Table';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`)
      // .then(data => setUserData(data.data))
      .then(data => {
        setUserData(data.data)
      })
      .catch(err => console.log(err));
  }, [page]);

  return (
    <div>
      {userData && (
        <div>
          <DenseTable userData={userData} />
          <PaginationControlled page={page} setPage={setPage} userData={userData} />
        </div>
      )}
    </div>
  )
}

export default App;
