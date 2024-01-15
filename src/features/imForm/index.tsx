import React from "react";

import { imConfig } from "./helper";
import ConfigRendering from "../configRendering";

const IMForm: React.FunctionComponent = () => {
  return <ConfigRendering config={imConfig} />;
};

export default IMForm;
