import React from "react";

import DialogBoxRPG from "./index.js";
import img from "../examples/assets/comments.svg";

import sty from "./DialogBoxRPG.module.scss";

export default {
  title: "DialogBoxRPG",
  component: DialogBoxRPG,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <DialogBoxRPG {...args} />;

export const RoleDialogMode = Template.bind({});
RoleDialogMode.args = {
  mode: "role",
  label: "Button",
  role_name: "Gore",
  role_img: img,
  children: "test123",
  className: sty.DialogBoxRPG,
  classNameRoleDialogContainer: sty.classNameRoleDialogContainer,
  classNameChoiceContainer: sty.classNameChoiceContainer,
  classNameNarratorContainer: sty.classNameNarratorContainer,
};
