import { useState } from 'react';

export default function LoadingImage({ src, alt, className, wrapperClassName }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${wrapperClassName || ''}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#1a1d27] animate-pulse rounded-inherit" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
