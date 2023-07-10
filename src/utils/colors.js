export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#262626`,
  mainYellow: `#d2aa5c`,
  mainYellow2: `#F2AF29`,
  mainGrey: `#474747`,
}

export const transDefault = "transition: all 0.5s ease-in-out"

export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition:${property} ${time} ${type}`
}
