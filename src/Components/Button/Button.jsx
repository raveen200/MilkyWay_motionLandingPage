import styled from "styled-components";
import propTypes from "prop-types";

function Button({ name, icon, background = "var(--color-bg)", color, border }) {
  return (
    <ButtonStyled
      style={{
        background: background,
        color: color,
        border: border,
      }}
    >
      {icon && icon}
      {name}
    </ButtonStyled>
  );
}
const ButtonStyled = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: 2px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: var(--color-border);
    color: white;
  }
`;

Button.propTypes = {
  name: propTypes.string.isRequired,
  icon: propTypes.node,
  background: propTypes.string,
  color: propTypes.string,
  border: propTypes.string,
};

export default Button;
