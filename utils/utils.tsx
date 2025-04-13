import { Fragment } from 'react';

export const formatDescription = (description: string) => {
  return description.split('\n').map((line, index) => (
    <Fragment key={index}>
      <span dangerouslySetInnerHTML={{ __html: line }} />
    </Fragment>
  ));
};
