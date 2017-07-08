import styled from 'styled-components';

export const CreateCampaignElement = styled.div`
  margin: auto;
  width: calc(100% - 20rem);
  background: #fafafa;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 15px rgba(36,37,38,0.08);

  .create {
    button {
      font-family:'Open Sans';
      font-weight: 700;
      font-size: 0.9rem;
      margin: 0 0.9rem;
      font-weight: 700;
      background: #ff5a5f;
      padding: 0.8rem 1rem;
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
`;
