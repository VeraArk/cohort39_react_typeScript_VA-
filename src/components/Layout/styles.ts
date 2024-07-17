import styled from "@emotion/styled";
import { colors } from "styles/colors";
import {NavLink} from 'react-router-dom'


export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  background-color: ${colors.PRIMARY};
  padding: 20px 40px;
  color: white;
`;

export const Logo = styled.div`
  height: 100%;
  width: 80px;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 200px;
  width: 100%;
  height: 150px;
  border-top: 1px solid black;
  background-color: ${colors.PRIMARY};
  padding: 20px 40px;
  color: white;
`;

export const FooterLogo = styled.div`
  height: 80px;
  width: 80px;
`;

export const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled.a`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
