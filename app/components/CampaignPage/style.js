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
    width: 75%;

    .campaign-headers {
      margin: 2rem;
      padding: 1rem;
      background: #FAFAFA;
      border-radius: 1rem;
      box-shadow: 0 6px 15px rgba(36,37,38,0.08);
      
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-contents: center;

       .logo {
          margin: auto;

          img {
            height: 10rem;
            border-radius: 10rem;
            margin: 2rem;
          }
        }

        .line {
          width: 20rem;
          margin: 1rem 0;
        }

        .donate {
          margin: 1rem 0;
          padding: 0.5rem;
          border-radius: 1rem;
          background: #ff5a5f;
          color: #fafafa;
        }
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
    width: 25%;
    height: auto;
    margin: 2rem 0 2rem;
    padding: 1rem;
    background: #FAFAFA;
    border-radius: 1rem;
    box-shadow: 0 6px 15px rgba(36,37,38,0.08);
  }
`;
