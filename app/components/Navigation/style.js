import styled from 'styled-components';

export const NavigationElement = styled.nav`
  width: 100%;
  position: relative;
  z-index: 1000;
  margin: 0 0 2rem;
  background: #fafafa;
  border-bottom: 1px solid #dedede;

  .logo {
    max-height: 100%;
    max-width: 100%;
  }

  Link {
    max-height: 100%;
  }

  .navIcon {
    height: 2rem;

    @media screen and (min-width: 41em){
      display:none;
    }
  }

  .mobile {
    width: 100%;
    height: auto;
    display: flex;
    padding-bottom: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans';
    background: #fafafa;

    .campaign {
      color: #ff5a5f;
      width: 90%;
      height: 2.5rem;
      padding: 1rem;
      font-family: 'Open Sans'
      font-weight: 700;
    }

    .menu {
      color: #646464;
      width: 90%;
      height: 2.5rem;
      padding: 1rem;
      font-family: 'Open Sans'
      font-weight: 700;
      border-top: 2px solid #dedede;
    }

    @media screen and (min-width: 41em){
      display:none;
    }
  }

  .navbar {
    font-size: 0.5rem;
    width: 100%;
    height: 4.5rem;
    padding: 0.5rem 1rem;
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu {
      display: flex;
      text-align: right;
      font-weight: 700;

      @media screen and (max-width: 40em){
        display: none;
      }

      .campaign {
        button {
          font-family:'Open Sans';
          font-weight: 700;
          font-size: 0.9rem;
          margin: 0 0.9rem;
          font-weight: 700;
          background: #ff5a5f;
          padding: 1rem;
          border-radius: 2rem;
          color: #fafafa;
          transition: background 0.25s ease-out, color 0.25s ease-out;

          &:hover {
            margin: 0 0.9rem;
            font-weight: 700;
            background: #fafafa;
            padding: 1rem;
            border-radius: 2rem;
            color: #ff5a5f;
            transition: background 0.25s ease-out, color 0.25s ease-out;
          }
        }
      }

      button {
        font-family:'Open Sans';
        font-weight: 700;
        font-size: 0.9rem;
        margin: 0 1rem;
        font-weight: 700;
        padding: 0.25rem;
        color: #646464;
        transition: color 0.25s ease-out;

        &:hover {
          font-size: 0.9rem;
          margin: 0 1rem;
          font-weight: 700;
          padding: 0.25rem;
          color: #ff5a5f;
          transition: color 0.25s ease-out;
        }
      }
    }

  }

`;
