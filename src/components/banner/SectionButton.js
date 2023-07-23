import { styled } from "styled-components"
import { styles } from "../../utils"
import { BannerButton } from "./BannerButton"

export const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
`
