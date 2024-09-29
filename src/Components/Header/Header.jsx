import styled from "styled-components";
import logo from "../../assets/Img/astronaut.svg";
import Button from "../Button/Button";
import { GoRocket } from "react-icons/go";
import { FaUserAstronaut } from "react-icons/fa";
import MilkyWay from "../../assets/Img/milkiyway1.png";

import { useRef } from "react";
import Hover3d from "../../utils/hover";

function Header() {
  const hero = useRef(null);
  const hoverHero = Hover3d(hero, { x: 30, y: -40, z: 30 });

  const imageHover = Hover3d(hero, { x: 20, y: -5, z: 11 });

  return (
    <HeaderStyled ref={hero}>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" width={42} />
          <h2>Logo</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="Search..." />
        </div>
        <ul className="nav-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <Button name="Contact" icon={<GoRocket />} />
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 style={{ fontFamily: "Abril Fatface, cursive" }}>
            Explore the Milky way
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla</p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaUserAstronaut />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="image-content">
          <div
            className="image"
            style={{
              transform: hoverHero.transform,
              transition: hoverHero.transition,
            }}
          >
            <img src={MilkyWay} width={600} alt="hero"
            style={{transform: imageHover.transform}}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
  nav {
    margin-top: 0.5rem;
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;

      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);

        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;

      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);

      img {
        border-radius: 8px;
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      padding: 0 2rem;
      flex-direction: column;
      align-items: flex-start;

      .input {
        width: 100%;
        justify-content: flex-start;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;

        input {
          width: 100%;
        }
      }

      .nav-items {
        flex-direction: column;
        gap: 1rem;
      }
    }

    .header-content {
      padding: 0 2rem 2rem 2rem;
      flex-direction: column;
      gap: 2rem;

      .text-content {
        > h1 {
          font-size: clamp(1.5rem, 4vw, 3rem);
        }

        .buttons {
          flex-direction: column;
          gap: 0.5rem;
        }
      }

      .image-content .image {
        width: 100%;
        padding: 0.5rem;

        img {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 480px) {
    nav {
      padding: 0 1rem;

      .input {
        input {
          padding: 0.4rem 0.6rem;
        }
      }

      .nav-items {
        gap: 0.5rem;
      }
    }

    .header-content {
      padding: 0 1rem 1rem 1rem;
      gap: 1rem;

      .text-content {
        > h1 {
          font-size: clamp(1rem, 3vw, 2rem);
        }

        .buttons {
          gap: 0.25rem;
        }
      }

      .image-content .image {
        padding: 0.25rem;
      }
    }
  }
`;

export default Header;
