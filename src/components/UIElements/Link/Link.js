import React from "react";
import { useHistory } from "react-router-dom";
import ButtonTertiary from "../Button/button-tertiary/ButtonTertiary";
import types from "./helpers/types";
import modes from "./helpers/modes";

const ExternalLink = ({ type, mode, href, style, className }) => {
  const linkType = types[type] || types.INTERNAL;
  const linkMode = modes[mode] || modes.PUSH;

  const history = useHistory();

  const handleOnClick = () => handleLinkTypeAction(linkType);

  const handleLinkTypeAction = () => {
    if (linkType === types.EXTERNAL) {
      return handleExternalLink();
    }

    return handleInternalLink();
  };

  const handleExternalLink = () => (window.location.href = href);

  const handleInternalLink = () => {
    if (linkMode === modes.PUSH) {
      return history.push(href);
    }
    return history.replace(href);
  };

  return (
    <ButtonTertiary onClick={handleOnClick} style={style} className={className}>
      External link
    </ButtonTertiary>
  );
};

ExternalLink.defaultProps = {
  type: "",
  mode: "",
  href: "",
  style: {},
  className: "",
};

export default ExternalLink;
