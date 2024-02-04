import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 1280px;
  padding: 20px;
  margin: 0 auto;
`;
export const Navigation = styled.ul`
  display: flex;
  gap: 40px;
`;
export const Link = styled(NavLink)`
  display: inline-block;
  color: navy;
  border-radius: 15px;
  text-decoration: none;
  padding: 30px 40px;
  background-color: white;

  &.active {
    border-radius: 15px;
    padding: 30px 40px;
    color: white;
    background-color: #373636;
  }
`;
