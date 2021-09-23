import React from 'react';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  return (
    <Image
      src={require('./../../../assets/images/logo.svg')}
      alt="Open"
      width={64}
      height={64} />
  );
}

export default Logo;