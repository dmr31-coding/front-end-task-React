import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Modal() {
  const navigate = useNavigate();

  // Function to close the modal by removing 'modal' from search params
  const closeModal = () => {
    navigate({ search: '' });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center shadow-md "
      onClick={closeModal} // Close when clicking outside modal content
    >
      <div
        className="bg-white p-6 rounded shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <h1 className="font-bold text-xl mb-4">Vrit Frontend Assignment</h1>
        <p className="mb-4 overflow-auto break-words">loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, suscipit dignissimos nulla .</p>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}
