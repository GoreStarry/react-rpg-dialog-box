import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useWindupString, WindupChildren, Pause, Pace } from "windups";

const DialogContainer = ({
  children,
  nextIconDelayMillisecond = 500,
  dialogPauseMS,
  dialogPaceMS = 40,
  classNameNextIcon,
  isWindupSkipped,
  handleIsWindupFinished,
}) => {
  const [isShowNextIcon, setIsShowNextIcon] = useState(false);

  const showNextIcon = useCallback(() => {
    handleIsWindupFinished();
    setTimeout(() => {
      setIsShowNextIcon(true);
    }, nextIconDelayMillisecond);
  }, [nextIconDelayMillisecond]);

  useEffect(() => {
    setIsShowNextIcon(false);
    return () => {};
  }, [children]);

  return (
    <div>
      <WindupChildren skipped={isWindupSkipped} onFinished={showNextIcon}>
        {dialogPauseMS && <Pause ms={dialogPauseMS} />}
        <Pace ms={dialogPaceMS}>{children}</Pace>
      </WindupChildren>
      {isShowNextIcon && (
        <div className={classNameNextIcon || ".NextIcon"}></div>
      )}
    </div>
  );
};

DialogContainer.propTypes = {};

export default DialogContainer;
