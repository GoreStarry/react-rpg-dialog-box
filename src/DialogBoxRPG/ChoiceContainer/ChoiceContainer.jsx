import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useWindupString, WindupChildren, Pause, Pace } from "windups";
import cx from "classnames";

import sty from "./ChoiceContainer.module.scss";

const ChoiceContainer = ({
  className,
  children,
  options,
  handleClickOption,
  dialogPaceMS = 40,
  dialogPauseMS,
}) => {
  const [isShowOptions, setIsShowOptions] = useState(false);

  const showOptions = useCallback(() => {
    setIsShowOptions(true);
  }, []);

  return (
    <div className={cx(sty.ChoiceContainer, className)}>
      <div className="DialogBoxRPG__Windup">
        <WindupChildren onFinished={showOptions}>
          {dialogPauseMS && <Pause ms={dialogPauseMS} />}
          <Pace ms={dialogPaceMS}>{children}</Pace>
        </WindupChildren>
      </div>
      <ul className="DialogBoxRPG__ul_choice">
        {isShowOptions &&
          options.map(({ value, content, onClick }, index) => {
            return (
              <li
                className="DialogBoxRPG__li_choice"
                key={content}
                data-value={value}
                onClick={onClick || handleClickOption}
              >
                {content}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

ChoiceContainer.propTypes = {};

export default ChoiceContainer;
