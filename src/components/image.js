import React from 'react';
import { Image as Imgi } from 'theme-ui';

export default function Image({ src, ...rest }) {
  return <Imgi src={src} {...rest} />;
}
