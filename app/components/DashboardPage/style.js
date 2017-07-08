import styled from 'styled-components';

export const DashboardPageElement = styled.div`
  margin: auto;
  width: calc(100% - 20rem);
  color: #646464;

  @media screen and (max-width: 64em){
    width: 100%;
  }

  .dashboard {
    width: auto;
    background: #FAFAFA;
    margin: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 6px 15px rgba(36,37,38,0.08);

    @media screen and (max-width: 64em){
      padding: 1rem;
    }

    .profile .content{
      margin: 2rem;
    }
  }
`;
