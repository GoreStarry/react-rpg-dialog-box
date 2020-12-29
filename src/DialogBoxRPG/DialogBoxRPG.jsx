import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useKey from "react-use/lib/useKey.js";

import ChoiceContainer from "./ChoiceContainer";
import RoleDialogContainer from "./RoleDialogContainer";
import NarratorContainer from "./NarratorContainer";

const DialogBoxRPG = React.memo(
  ({
    children,
    mode,
    className,
    disableGoNext,

    classNameRoleDialogContainer,
    classNameRoleName,
    role_name,
    role_img,

    classNameChoiceContainer,
    options,
    handleClickOptionAndReturnIndex,

    classNameNarratorContainer,

    disableSpaceKey,
    handleGoNext,

    nextIconDelayMillisecond = 500,

    classNameNextIcon,

    dialogPauseMS,
    dialogPaceMS,
  }) => {
    const refIsWindupsFinished = useRef(false);
    const [isWindupSkipped, setIsWindupSkipped] = useState(false);

    useEffect(() => {
      refIsWindupsFinished.current = false;
      setIsWindupSkipped(false);
      return () => {};
    }, [children]);

    const handleIsWindupFinished = useCallback(() => {
      refIsWindupsFinished.current = true;
      setIsWindupSkipped(true);
    }, []);

    const handleClickSpaceKey = useCallback(() => {
      !disableSpaceKey && handleClickBoxToNext();
    }, [disableSpaceKey, handleGoNext]);

    useKey(" ", handleClickSpaceKey, { event: "keyup" });

    const handleClickBoxToNext = useCallback(() => {
      if (refIsWindupsFinished.current === false) {
        setIsWindupSkipped(true);
      } else {
        !disableGoNext && handleGoNext();
      }
    }, [disableGoNext, handleGoNext]);

    switch (mode) {
      case "choice":
        return (
          <div className={cx(className)}>
            <ChoiceContainer
              className={classNameChoiceContainer}
              options={options}
              handleIsWindupFinished={handleIsWindupFinished}
              handleClickOption={handleClickOptionAndReturnIndex}
              dialogPauseMS={dialogPauseMS}
              dialogPaceMS={dialogPaceMS}
              isWindupSkipped={isWindupSkipped}
            >
              {children}
            </ChoiceContainer>
          </div>
        );

      case "narrator":
        return (
          <div className={cx(className)} onClick={handleClickBoxToNext}>
            <NarratorContainer
              className={classNameNarratorContainer}
              classNameNextIcon={classNameNextIcon}
              nextIconDelayMillisecond={nextIconDelayMillisecond}
              dialogPauseMS={dialogPauseMS}
              dialogPaceMS={dialogPaceMS}
              isWindupSkipped={isWindupSkipped}
              handleIsWindupFinished={handleIsWindupFinished}
            >
              {children}
            </NarratorContainer>
          </div>
        );

      default:
        return (
          <div className={cx(className)} onClick={handleClickBoxToNext}>
            <RoleDialogContainer
              role_name={role_name}
              role_img={role_img}
              className={classNameRoleDialogContainer}
              classNameRoleName={classNameRoleName}
              nextIconDelayMillisecond={nextIconDelayMillisecond}
              dialogPauseMS={dialogPauseMS}
              dialogPaceMS={dialogPaceMS}
              classNameNextIcon={classNameNextIcon}
              isWindupSkipped={isWindupSkipped}
              handleIsWindupFinished={handleIsWindupFinished}
            >
              {children}
            </RoleDialogContainer>
          </div>
        );
    }
  }
);

DialogBoxRPG.propTypes = {
  mode: PropTypes.oneOf(["role", "narrator", "choice"]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any, // it will set to data-value attr, you can get value directly by event.target
      content: PropTypes.string, // show in option btn
      onClick: PropTypes.func, // it will replace default handleClickOption callback
    })
  ),
  nextIconDelayMillisecond: PropTypes.number,
  handleGoNext: PropTypes.func,
  role_name: PropTypes.string,
  dialogPaceMS: PropTypes.number,
  dialogPauseMS: PropTypes.number,
  handleClickOptionAndReturnIndex: PropTypes.func,
  className: PropTypes.string,
  classNameRoleName: PropTypes.string,
  classNameRoleDialogContainer: PropTypes.string,
  classNameChoiceContainer: PropTypes.string,
  classNameNarratorContainer: PropTypes.string,
  classNameNextIcon: PropTypes.string,
};

export default DialogBoxRPG;
