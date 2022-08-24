import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <LogoBox>
        <Logo />
        <LogoText>greenyHub</LogoText>
      </LogoBox>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  width: 100vw;
  height: 3rem;
  padding 0.8rem;
  background: ${({ theme }) => theme.colors.green_1};
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img.attrs({
  src: "/greenyHub_logo.png",
  alt: "logo",
})`
  width: 3rem;
  height: 3rem;
  margin-right: 0.8rem;
  cursor: pointer;
`;

const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.white_1};
  font-size: ${({ theme }) => theme.fontSizes.xl3};
`;
