import React from 'react';
import PropTypes from 'prop-types';

const Electro = ({ size, color, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="13.913 13.982" {...props}>
    <path
      d="M 4.533,13.505 C 5.5591165,13.577462 6.6007914,13.41625 7.557,13.037 6.082551,12.639854 4.5297829,11.89497 4,10.333 L 3.8134724,9.4316173 3.872,8.513 C 4.6891777,10.035002 6.8753597,8.8070985 6.5245556,7.2815394 6.396587,4.7582785 2.6324578,4.2864059 1.5411362,6.464516 0.87004538,7.6345861 0.85865434,9.0073098 0.874,10.317 -0.78856023,7.4486556 0.02299127,3.4773339 2.691,1.5 2.2158261,2.3827883 1.4693147,3.4812488 1.503,4.424 2.8718922,2.8059867 5.6973923,1.9237478 7.2842359,3.5078931 6.0862887,3.5481914 5.3612918,5.0396849 6.3831747,5.9434198 8.0172121,7.7502362 11.08749,5.8152121 10.563731,3.5938512 10.353021,1.7956713 8.604614,0.68080717 7.108,0 10.447547,-0.05555825 13.548339,2.6056706 14,5.915 13.440752,5.0442133 12.977869,4.0586606 12.055,3.5 12.352286,4.6479955 12.562699,5.9053239 12.034941,7.0237487 11.666396,7.9357909 10.888602,8.69313 9.931,8.958 10.594719,7.9296739 9.6647827,6.562122 8.4053121,6.8818966 5.9242321,7.3007307 5.9812845,11.041636 8.2557044,11.745545 9.95959,12.380491 11.623635,11.454572 13.02,10.55 11.390064,13.444611 7.6084615,14.761441 4.533,13.505 Z"
      fill={color}
      style={{ fillOpacity: 1 }}
    />
  </svg>
);

Electro.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string || PropTypes.number,
};

Electro.defaultProps = {
  color: '#E2B8FF',
  size: 64,
};

export default Electro;
