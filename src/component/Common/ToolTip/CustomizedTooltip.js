import * as React from "react";

import Tooltip from "@material-ui/core/Tooltip";

export default function CustomizedTooltip({
  title,
  children,
  placement = "right-start",
}) {
  return (
    <Tooltip title={title} placement={placement}>
      <div style={{ cursor: "pointer" }}>{children}</div>
    </Tooltip>
  );
}
