import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  header: ReactNode;
  searchInput: ReactNode;
  body: ReactNode;
}

const SearchRepositoryLayout = ({ header, searchInput, body }: Props) => {
  return (
    <Container>
      {header}
      <SearchWrapper>{searchInput}</SearchWrapper>
      {body}
    </Container>
  );
};

export default SearchRepositoryLayout;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.8rem;
`;

const SearchWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
  margin-top: 8rem;
`;
