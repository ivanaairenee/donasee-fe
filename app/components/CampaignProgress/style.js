import styled from 'styled-components';

export const CampaignProgressElement = styled.div`
	.campaign {
      display: flex;
      margin: 2rem 0 1rem;

      .campaign-logo {
        img {
          height: 7.5rem;
          border-radius: 7.5rem;
          margin: 0 2rem 0;
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
			    color: #fafafa;
			    background: #007A87;
			    
			    &:hover {
			      color: #007A87;
			      background: #fafafa;
			      transition: background 0.25s ease-out, color 0.25s ease-out;
			    }
			  }

			  .red {
			    color: #fafafa;
			    background: #FF5A5F;

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
        }
      }
    }
`;