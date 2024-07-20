import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-72 ml-96 ">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
    </div>
  );
};

export default Loading;
