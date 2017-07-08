import styled from 'styled-components';

export const PaymentElement = styled.div`
  margin: auto;
  width: calc(100% - 30rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 6px 15px rgba(36,37,38,0.08);

  @media screen and (max-width: 64em){
    width: 95%;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  }
  .donate {
    button {
      font-family:'Open Sans';
      font-weight: 700;
      font-size: 0.9rem;
      margin: 0 0.9rem;
      font-weight: 700;
      background: #ff5a5f;
      padding: 0.8rem 2rem;
      border-radius: 1.5rem;
      color: #fafafa;
      margin: 2rem 0;
      transition: background 0.25s ease-out, color 0.25s ease-out;

      &:hover {
        margin: 2rem 0;
        font-weight: 700;
        background: #fafafa;
        padding: 0.8rem 1rem;
        border-radius: 1.5rem;
        color: #ff5a5f;
        transition: background 0.25s ease-out, color 0.25s ease-out;
      }
    }
  }

  .inputText {
    marginTop: 0.5rem;
  }

  ::-webkit-input-placeholder {
    font-size: 0.8rem;
    font-family: 'Open Sans';
  }
  :-moz-placeholder {
    font-size: 0.8rem;
    font-family: 'Open Sans';
  }
  ::-moz-placeholder {
    font-size: 0.8rem;
    font-family: 'Open Sans';
  }
  :-ms-input-placeholder {
    font-size: 0.8rem;
    font-family: 'Open Sans';
  }
`;
