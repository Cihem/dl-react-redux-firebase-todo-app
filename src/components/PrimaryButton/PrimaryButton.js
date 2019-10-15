import React from "react";
import { string, bool, node } from "prop-types";
import classNames from "classnames";

import "./PrimaryButton.styles.scss";
import { getClassesFromProps } from "../../utils/helpers";

function PrimaryButton({ icon, disabled, additionalClasses, children }) {
  const addedClasses = getClassesFromProps(additionalClasses);

  const buttonClassNames = classNames({
    PrimaryButton: true,
    PrimaryButton__WithIcon: Boolean(icon),
    ...addedClasses,
  });

  const svgClassNames = classNames({
    PrimaryButton__Icon: true,
  });

  return (
    <button className={buttonClassNames} disabled={disabled}>
      {icon && (
        <svg className={svgClassNames}>
          <use xlinkHref={`#${icon}`} aria-hidden="true" />
        </svg>
      )}
      {children}
    </button>
  );
}

PrimaryButton.propTypes = {
  icon: string,
  disabled: bool,
  additionalClasses: string,
  children: node.isRequired,
};

PrimaryButton.defaultProps = {
  icon: "",
  additionalClasses: "",
  disabled: false,
};

export default PrimaryButton;
