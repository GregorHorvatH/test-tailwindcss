import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => (
  <div className="loader flex justify-center p-6">
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
);
