import React from 'react';
import {RingLoader} from 'react-spinners';

const Loader = ({fullscreen, small, large, color}) => {
  if (fullscreen) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RingLoader
          sizeUnit={'px'}
          size={40}
          color={color || '#0f9aee'}
          loading={true}
        />
      </div>
    );
  }
  if (small)
    return (
      <RingLoader
        sizeUnit={'px'}
        size={20}
        color={color || '#0f9aee'}
        loading={true}
      />
    );
  if (large) {
    return (
      <RingLoader
        sizeUnit={'px'}
        size={80}
        color={color || '#0f9aee'}
        loading={true}
      />
    );
  }

  return (
    <RingLoader
      sizeUnit={'px'}
      size={40}
      color={color || '#0f9aee'}
      loading={true}
    />
  );
};

export default Loader;
