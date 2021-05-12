export const BatteryStyles = /* css */ `
.battery {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 7px;
  background-color: var(--magenta);
  border-radius: 2px;
  box-shadow: var(--light-shadow);
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  opacity: 0.9;
  transition: background-color 160ms var(--transition-easing), opacity 160ms var(--transition-easing), transform 160ms var(--transition-easing);
}
.battery--caffeinate {
  background-color: #fff;
}
.battery:hover {
  opacity: 1;
}
.battery:active {
  transform: scale(0.9);
}
.battery__charging-icon {
  position: relative;
  width: 10px;
  height: 10px;
  margin: 0 auto;
}
.battery__charging-icon-fill,
.battery__charging-icon-outline-left,
.battery__charging-icon-outline-right {
  position: absolute;
  width: inherit;
  height: inherit;
}
.battery__charging-icon-fill {
  fill: var(--main);
  z-index: 3;
}
.battery__charging-icon-outline-left,
.battery__charging-icon-outline-right {
  fill: var(--magenta);
  z-index: 2;
}
.battery--caffeinate .battery__charging-icon-outline-left,
.battery--caffeinate .battery__charging-icon-outline-right {
  fill: #fff;
}
.battery__charging-icon-outline-left {
  left: -1px;
}
.battery__charging-icon-outline-right {
  left: 1px;
}
.battery__icon {
  position: relative;
  width: 16px;
  height: 9px;
  margin-right: 8px;
  border-radius: 2px;
  border: 1px solid var(--main);
}
.battery__icon::after {
  content: '';
  position: absolute;
  top: 10%;
  left: 100%;
  width: 3px;
  height: 80%;
  border-radius: 0 2px 2px 0;
  background-color: var(--main);
}
.battery__icon-filler {
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background-color: var(--minor);
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 160ms var(--transition-easing);
  z-index: 1;
}
.battery--low .battery__icon-filler {
  background-color: var(--red);
}
.battery__caffeinate-icon {
  position: absolute;
  top: calc(50% - 10px);
  right: 1px;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  fill: var(--main);
  opacity: 0.3;
}
`