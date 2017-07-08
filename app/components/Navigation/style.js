import styled from 'styled-components';

export const NavigationElement = styled.nav`
  width: 100%;
  position: relative;
  z-index: 1000;
  margin: 0 0 2rem;
  background: #fafafa;

  .logo {
    max-height: 100%;
    width: 20%;
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
