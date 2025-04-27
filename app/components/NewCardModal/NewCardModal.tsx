// components/NewCardModal.js
import { useState } from 'react';

const NewCardModal = ({ isOpen, onClose, onSubmit }: { 
    isOpen: boolean; 
    onClose: () => void; 
    onSubmit: (cardDetails: { name: string; expiry: string; cvv: string, freezed: boolean }) => void 
  }) => {
  const [cardDetails, setCardDetails] = useState({
    name: '',
    expiry: '',
    cvv: '',
    freezed: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(cardDetails);
    onClose();
    setCardDetails({ name: '', expiry: '', cvv: '', freezed: false, }); // Reset the form state
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full  bg-opacity-50 flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="bg-white rounded-lg p-8 w-1/2">
        <h2 className="text-2xl font-bold mb-4">Add New Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={cardDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiry">
              Expiry
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiry"
              type="text"
              name="expiry"
              value={cardDetails.expiry}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-end mt-4 gap-2.5">
                <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={onClose}
                >
                    Close
                </button>
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                    Submit
                </button>
           </div>
        </form>
      </div>
    </div>
  );
};

export default NewCardModal;