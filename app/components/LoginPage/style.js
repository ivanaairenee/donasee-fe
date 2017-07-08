import styled from 'styled-components';

export const LoginPageElement = styled.div`
  width: 100%;
  position: relative;
  padding: 0.5rem;

  .content {
    width: 20rem;
    z-index: 100;
    padding: 2rem 2rem 1.5rem;
    margin: 0 auto;

    h1 {
      line-height: 1;
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: 0.5rem;
      text-transform: uppercase;
      margin-right: -0.5rem;
      color: ${(props) => props.theme.blue};
    }

    h3 {
      line-height: 1;
      font-size: 0.85rem;
      color: ${(props) => props.theme.blueDarkUltra};
    }

    input {
      text-align: ${(props) => {
        if (props.right) {
          return 'right';
        }
        return 'left';
      }};
      width: 100%;
      display: block;
      padding: 0.5rem 1rem;
      margin-top: 0.2rem;
      background-color: #ffffff;
      border-radius: 5px;
    }

    button {
      padding: 0.5rem 1rem;
      border-radius: 3rem;
      width: 8rem;
      color: ${(props) => props.theme.grayDarkSuper};
      background: ${(props) => props.theme.grayLight};
      border: 0.2rem solid ${(props) => props.theme.blue};
      transition: color 0.25s ease-out, background 0.25s ease-out;

      &:hover,
      &:focus {
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.blueDarkUltra};
        transition: color 0.25s ease-in, background 0.25s ease-in;
      }
    }
  }
`;
