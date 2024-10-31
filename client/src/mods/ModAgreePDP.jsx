const ModalAgreePDP = ({ onAgree, onDisagree }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="p-5 bg-white rounded-md shadow-lg w-80">
        <h2 className="mb-4 text-lg font-semibold text-black">
          Personal Data Protection
        </h2>
        <p className="mb-4 text-sm text-black">
          Do you agree to nsc.com privacy policy?
        </p>
        <div className="flex justify-end space-x-2">
          <button onClick={onDisagree} className="px-4 py-2 text-gray-600">
            No
          </button>
          <button onClick={onAgree} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAgreePDP;
