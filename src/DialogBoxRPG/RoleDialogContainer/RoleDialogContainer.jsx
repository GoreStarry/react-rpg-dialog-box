import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import DialogContainer from "../DialogContainer";

const RoleDialogContainer = ({
  className,
  children,
  role_name,
  role_img,
  RoleDialogContainer,
  ComponentRoleName,
  ComponentRoleImg,
  classNameRoleName,
  classNameRoleImg,
  classNameNextIcon,
  isWindupSkipped,
  handleIsWindupFinished,
  ...restProps
}) => {
  return (
    <div className={className}>
      {role_img &&
        (ComponentRoleImg ? (
          <ComponentRoleImg img_url={role_img} />
        ) : (
          <img className={classNameRoleImg} src={role_img} alt={role_name} />
        ))}
      <div className="RoleDialogContainer__box_name_dialog">
        {role_name &&
          (ComponentRoleName ? (
            <ComponentRoleName>{role_name}</ComponentRoleName>
          ) : (
            <div className={classNameRoleName}>{role_name}</div>
          ))}
        <DialogContainer
          classNameNextIcon={classNameNextIcon}
          RoleDialogContainer={RoleDialogContainer}
          isWindupSkipped={isWindupSkipped}
          handleIsWindupFinished={handleIsWindupFinished}
          {...restProps}
        >
          {children}
        </DialogContainer>
      </div>
    </div>
  );
};

RoleDialogContainer.propTypes = {};

export default RoleDialogContainer;
