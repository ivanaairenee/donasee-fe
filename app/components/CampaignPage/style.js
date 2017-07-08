import styled from 'styled-components';

export const CampaignPageElement = styled.div`
  margin: auto; 
  width: calc(100% - 20rem);
  display: flex;
  justify-content: center;
  align-contents: center;
  
  p {
    flex: 1;
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.25;
  }

  .campaign {
    width: 80%;

    .campaign-headers {
      margin: 2rem;
      padding: 1rem;
      background: #FAFAFA;
      border-radius: 1rem;
      box-shadow: 0 6px 15px rgba(36,37,38,0.08);
      
      .content {
        display: flex;
        margin: 1rem 0 1rem;
        text-align: center;
      }
    }

    .campaign-body {
      margin: 2rem;
      padding: 1rem;
      background: #FAFAFA;
      border-radius: 1rem;
      box-shadow: 0 6px 15px rgba(36,37,38,0.08);

      .content {
        margin: 1rem 0 1rem;
        text-align: justify;
      }
    }
  }

  .donors {
    width: 20%;
    margin: 2rem 0 2rem;
    padding: 1rem;
    background: #FAFAFA;
    border-radius: 1rem;
    box-shadow: 0 6px 15px rgba(36,37,38,0.08);
  }
`;
