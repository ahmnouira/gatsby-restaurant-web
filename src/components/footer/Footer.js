import React from "react"
import { styled } from "styled-components"
import { styles } from "../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

const ICONS = [
  {
    id: 1,
    icon: <FaFacebook className="icon facebook-icon" />,
    path: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaTwitter className="icon twitter-icon" />,
    path: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaInstagram className="icon instagram-icon" />,
    path: "https://www.instagram.com",
  },
]

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="title">restaurant</div>
      <div className="icons">
        {ICONS.map(item => (
          <a
            className="icon"
            href={item.path}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <p className="copyright">copyright &copy; 2023 ahmnouira</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transObject({})};
    &:hover {
      color: ${styles.colors.mainPrimary};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 12rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
  }
`
