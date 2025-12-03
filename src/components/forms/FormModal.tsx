interface FormModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  isError?: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, title, message, isError = false, onClose }: FormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h3 className={`text-2xl font-bold mb-4 text-center ${isError ? 'text-red-600' : 'text-blue-800'}`}>
          {title}
        </h3>
        <p className="text-gray-600 text-center mb-6">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
