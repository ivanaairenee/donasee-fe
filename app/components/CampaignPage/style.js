import styled from 'styled-components';

export const CampaignPageElement = styled.div`
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

	.campaign {
		width: 80%;

		.campaign-headers {
			margin: 2rem;
			padding: 1rem;
			border-radius: 0.5rem;
			box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

			.content {
				display: flex;
				margin: 1rem 0 1rem;
				text-align: center;
			}
		}

		.campaign-body {
			margin: 2rem;
			padding: 1rem;
			border-radius: 0.5rem;
			box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

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
		border-radius: 0.5rem;
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}
`;