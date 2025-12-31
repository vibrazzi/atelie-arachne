import PropTypes from 'prop-types';

const LoadingSpinner = ({ size = 'md', fullScreen = false }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const spinner = (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-4 border-arachne-lightPurple border-t-arachne-neonPurple rounded-full animate-spin`}
        role="status"
        aria-label="Carregando"
      >
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-arachne-shadow/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="glass-arachne p-8 rounded-2xl">
          {spinner}
          <p className="mt-4 text-arachne-silk text-center font-medium">
            Carregando...
          </p>
        </div>
      </div>
    );
  }

  return spinner;
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  fullScreen: PropTypes.bool,
};

export default LoadingSpinner;
