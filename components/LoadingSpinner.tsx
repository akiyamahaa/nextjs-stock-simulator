import { cn } from "@/lib/utils"; // Shadcn utility for merging classNames

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-50">
      <div
        className={cn(
          "animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"
        )}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
