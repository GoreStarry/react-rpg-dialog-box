import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useWindupString, WindupChildren, Pause, Pace } from "windups";

const NarratorContainer = React.memo(
  ({
    children,
    className,
    classNameNextIcon,
    nextIconDelayMillisecond = 500,
    dialogPauseMS,
    dialogPaceMS = 40,
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
      <div className={className}>
        <WindupChildren skipped={isWindupSkipped} onFinished={showNextIcon}>
          {dialogPauseMS && <Pause ms={dialogPauseMS} />}
          <Pace ms={dialogPaceMS}>{children}</Pace>
        </WindupChildren>
        {isShowNextIcon && <div className={classNameNextIcon}></div>}
      </div>
    );
  }
);

NarratorContainer.propTypes = {};

export default NarratorContainer;
