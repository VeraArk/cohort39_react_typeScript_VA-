import { PageWrapper, LinkContainer, Link } from "./styles";


function Clients() {
  return (
    <PageWrapper>
      <LinkContainer>
        <Link to="/clients/facebook">Facebok</Link>
        <Link to="/clients/instagram">Instagram</Link>
        <Link to="/clients/telegram">Telegram</Link>
      </LinkContainer>
    </PageWrapper>
  );
}

export default Clients;
