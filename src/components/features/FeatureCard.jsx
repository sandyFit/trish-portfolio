import React from 'react';
import classNames from 'classnames';

const FeatureCard = ({gradient}) => {
    return (
        <div
        className={classNames(
          "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br",
          gradient
        )}
      />

    )
}

export default FeatureCard