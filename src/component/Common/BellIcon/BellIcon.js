import CustomizedTooltip from "../ToolTip/CustomizedTooltip";

function BellIcon() {
  return (
    <CustomizedTooltip title="Notifications" placement="bottom">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 13L18 9C18 4.58172 14.4183 1 10 1C5.58175 1 2.00002 4.58172 2.00002 9L2 13L1 14V17H7.55001C7.78164 18.1411 8.79052 19 10 19C11.2095 19 12.2184 18.1411 12.45 17H19V14L18 13Z"
          stroke="#324552"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    </CustomizedTooltip>
  );
}

export default BellIcon;
