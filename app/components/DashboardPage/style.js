import styled from 'styled-components';

export const DashboardPageElement = styled.div`
  margin: auto;
  width: calc(100% - 20rem);
  display: flex;
  justify-content: center;
  align-contents: center;

  h1 {
    flex: 1;
    margin: 0;
    line-height: 1.5;
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    flex: 1;
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.25;
  }

  .content {
    margin: 2rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    .dashboard-nav {
      display: flex;

    }
  }
`;
