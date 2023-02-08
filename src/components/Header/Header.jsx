import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import css from './Header.module.css';

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #120b3d;
  font-weight: 500;

  &.active {
    color: #a70960;
  }
`;

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <Link className={css.listItem} to="/">
          Home
        </Link>
        <Link className={css.listItem} to="/movies">
          Movies
        </Link>
      </header>
    </>
  );
};
