import React from 'react';
import { BrowserRouter as Router, useSearchParams } from 'react-router-dom';
import Modal from './Components/VritModal';
import UserList from './Components/VritUserList'

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Function to open the modal by adding 'modal' to search params
  const openModal = () => {
    setSearchParams({ modal: 'true' });
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">VritModal Showcase</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 shadow-md mb-32"
        onClick={openModal}
      >
        Open VritModal
      </button>

      <h2 className='text-2xl font-bold'>
        UserList from JSON data
        <p className='text-sm font-thin ml-4'>
          
          <UserList />
          
      
      </p>

      </h2>

      {/* Rendering Modal if 'modal' is present in search params */}
      {searchParams.get('modal') && <Modal />}
    </div>

    
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
      
    </Router>
  );
}
