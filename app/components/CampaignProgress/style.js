import styled from 'styled-components';

export const CampaignProgressElement = styled.div`
	.campaign {
      display: flex;
      margin: 2rem 0 1rem;

      @media screen and (max-width: 64rem){
        margin: 1rem 0 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }

      .campaign-logo {
        img {
          height: 7.5rem;
          width: 7.5rem;
          border-radius: 7.5rem;
          margin: 0 2rem 0;
          object-fit: cover;

          @media screen and (max-width: 64em){
            height: 5rem;
            width: 5rem;
            border-radius: 5rem;
            margin: 0 1rem 0;
          }
        }
      }

      .campaign-status {
        display: flex;
        justify-content: space-between;

        .status-text {
          display: flex;
          justify-content: space-between;

          .action {
            display: flex;
            width: auto;
			button {
			    height: 2rem;
			    margin: 0.25rem;
			    padding: 0.25rem 1rem 0.25rem;
			    border-radius: 1rem;
			    font-size: 0.8rem;
			    font-weight:300;
			    transition: background 0.25s ease-out, color 0.25s ease-out;
			  }

			  .green {
          font-family: 'Open Sans';
			    color: #fafafa;
			    background: #007A87;
          font-weight: 700;

			    &:hover {
			      color: #007A87;
			      background: #fafafa;
			      transition: background 0.25s ease-out, color 0.25s ease-out;
			    }
			  }

			  .red {
          font-family: 'Open Sans';
			    color: #fafafa;
			    background: #FF5A5F;
          font-weight: 700;

			    &:hover {
			      color: #FF5A5F;
			      background: #fafafa;
			      transition: background 0.25s ease-out, color 0.25s ease-out;
			    }
			  }
          }

          .collected {
            font-size: 0.75rem;
            font-weight: 300;
          }
        }

        .collected-span  {
          display: flex;
        }

        .line {
          width: 40rem;

          @media screen and (max-width: 64em){
            width: 30rem;
          }
          @media screen and (max-width: 40em){
            width: 15rem;
          }
        }
      }
    }
`;