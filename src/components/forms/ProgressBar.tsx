interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
}

export default function ProgressBar({ currentStep, totalSteps, stepTitle }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-center mt-2 text-blue-600 font-medium">{stepTitle}</p>
    </div>
  );
}
