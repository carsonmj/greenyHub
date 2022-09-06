import styled from "styled-components";

import Button from "../../../common/components/Button";

interface Props {
  hasNext: boolean;
  isLoadingNext: boolean;
  onClick: () => void;
}

const Footer = ({ hasNext, isLoadingNext, onClick }: Props) => {
  if (hasNext && !isLoadingNext) {
    return <Button text="더보기" onClick={onClick} />;
  }

  if (isLoadingNext) {
    return <Loading>loding...</Loading>;
  }

  return <></>;
};

export default Footer;

const Loading = styled.p`
  color: ${({ theme, color }) => (color ? color : theme.colors.gray_3)};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
