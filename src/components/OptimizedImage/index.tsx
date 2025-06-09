import React, { memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding="async"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: `${width}px ${height}px`
      }}
    />
  );
};

OptimizedImage.displayName = 'OptimizedImage';

export default memo(OptimizedImage); 