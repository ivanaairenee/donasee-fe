import styled from 'styled-components';

export const CampaignPageElement = styled.div`
  margin: auto;
  width: calc(100% - 20rem);
  display: flex;
  justify-content: center;
  align-contents: center;

  @media screen and (max-width: 64em){
    width: 90%;
  }

  @media screen and (max-width: 40em){
    width: 100%;
  }

  p {
    flex: 1;
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.25;
  }

  @media screen and (max-width: 64em){
    flex-direction: column;
  }

  .campaign {
    width: 75%;

    @media screen and (max-width: 64em){
      width: 100%;
    }

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
          @media screen and (max-width: 64em){
            width: 15rem;
          }
          @media screen and (max-width: 40em){
            width: 10rem;
          }
        }

        .donate {
          margin: 1rem 0;
          padding: 1rem;
          border-radius: 2rem;
          background: #ff5a5f;
          color: #fafafa;
          font-family: 'open Sans';
          font-weight: 700;
          transition: background 0.25s ease-out, color 0.25s ease-out;

          &:hover {
          margin: 1rem 0;
          padding: 1rem;
          border-radius: 2rem;
          background: #fafafa;
          color: #ff5a5f;
          font-family: 'open Sans';
          font-weight: 700;
          transition: background 0.25s ease-out, color 0.25s ease-out;
          }
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
    margin: 2rem 0;
    padding: 1rem;
    background: #FAFAFA;
    border-radius: 1rem;
    box-shadow: 0 6px 15px rgba(36,37,38,0.08);

    .donation {
      margin: 2rem 0;
    }

    @media screen and (max-width: 64em){
      width: auto;
      margin: 0 2rem;
      height: auto;
      padding: 1rem;
      background: #FAFAFA;
      border-radius: 1rem;
      box-shadow: 0 6px 15px rgba(36,37,38,0.08);
    }
    @media screen and (max-width: 40em){
      width: auto;
      margin: 0 2rem;
      height: auto;
      padding: 1rem;
      background: #FAFAFA;
      border-radius: 1rem;
      box-shadow: 0 6px 15px rgba(36,37,38,0.08);
    }
  }
`;
