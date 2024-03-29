import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useKey from "react-use/lib/useKey.js";

import ChoiceContainer from "./ChoiceContainer";
import RoleDialogContainer from "./RoleDialogContainer";
import NarratorContainer from "./NarratorContainer";
import sty from "./DialogBoxRPG.module.scss";

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
    isUseClickOut,
    classNameClickOut,

    handleIsComplete,
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
      handleIsComplete && handleIsComplete();
      setIsWindupSkipped(true);
    }, []);

    const handleClickSpaceKey = useCallback(() => {
      !disableSpaceKey && handleClickBoxToNext();
    }, [disableSpaceKey, handleGoNext]);

    useKey(" ", handleClickSpaceKey, { event: "keyup" });

    const handleClickBoxToNext = useCallback(() => {
      if (refIsWindupsFinished.current === false) {
        handleIsWindupFinished();
      } else {
        !disableGoNext && handleGoNext();
      }
    }, [disableGoNext, handleGoNext, handleIsWindupFinished]);

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
          <>
            {isUseClickOut && (
              <div
                className={cx(sty.box__click_out, classNameClickOut)}
                onClick={handleClickBoxToNext}
              ></div>
            )}
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
          </>
        );

      default:
        return (
          <>
            {isUseClickOut && (
              <div
                className={cx(sty.box__click_out, classNameClickOut)}
                onClick={handleClickBoxToNext}
              ></div>
            )}
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
          </>
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
  classNameClickOut: PropTypes.string,
  isUseClickOut: PropTypes.bool,
  handleIsComplete: PropTypes.func,
};

export default DialogBoxRPG;
