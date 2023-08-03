import { RotatingLines } from 'react-loader-spinner';
import { twMerge } from 'tailwind-merge'

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={twMerge('loader flex justify-center p-6', className)}>
    <RotatingLines
      strokeColor="lightblue"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
);
