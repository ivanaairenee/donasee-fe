import styled from 'styled-components';

export const SignupPageElement = styled.div`
  margin: auto;
  width: calc(100% - 20rem);
  background: #fafafa;
  border-radius: 1rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 15px rgba(36,37,38,0.08);

  @media screen and (max-width:64em){
    width: 95%;
  }

  .kirim {
      button {
        font-family:'Open Sans';
        font-weight: 700;
        font-size: 0.9rem;
        font-weight: 700;
        background: #ff5a5f;
        padding: 0.8rem 2rem;
        border-radius: 1.5rem;
        color: #fafafa;
        margin: 2rem 0;
        transition: background 0.25s ease-out, color 0.25s ease-out;

        &:hover {
        background: #fafafa;
        padding: 0.8rem 2rem;
        border-radius: 1.5rem;
        color: #ff5a5f;
        margin: 2rem 0;
        transition: background 0.25s ease-out, color 0.25s ease-out;

        }
      }
    }

  .content {
    width: 30rem;
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

  }
`;
