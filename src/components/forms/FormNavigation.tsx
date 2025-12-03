interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export default function FormNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
  isSubmitting = false
}: FormNavigationProps) {
  return (
    <div className="mt-10 flex justify-between pt-6 border-t">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 1}
        className={`px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-300 ${
          currentStep === 1 ? 'opacity-0 cursor-not-allowed' : ''
        }`}
      >
        Anterior
      </button>

      {currentStep < totalSteps ? (
        <button
          type="button"
          onClick={onNext}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Próximo
        </button>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Formulário'}
        </button>
      )}
    </div>
  );
}
