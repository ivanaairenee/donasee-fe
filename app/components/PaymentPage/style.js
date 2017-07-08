import styled from 'styled-components';

export const PaymentElement = styled.div`
  margin: auto;
  width: calc(100% - 30rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border-radius: 1rem;
  box-shadow: 0 6px 15px rgba(36,37,38,0.08);

  input {
    width: 20rem;
    background: #fafafa;
    border: 1px solid #dedede;
    height: 2.5rem;
    padding: 0.25rem;
    border-radius: 1rem;
    box-shadow: 0 6px 15px #dedede;
  }

  .content {
    width: 100%;
    margin: 2rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .form-control {
      width: 10rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      margin-top: 4rem;
    }
  }
`;
