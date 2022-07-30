import styled from 'styled-components';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import FollowProfileList from '../components/followProfile/FollowProfileList';

const Wrapper = styled.div`
  border: 1px solid var(--border-gray);
`;

export default function FollowPage({ title, ...props }) {
  function getTitle(url) {
    return url.charAt(1).toUpperCase() + url.slice(2) + 's';
  }

  return (
    <Wrapper>
      <TopNavBasic title={getTitle(props.match.url)} {...props} />
      <FollowProfileList searchFollow={props.match.url.slice(1)} {...props} />
    </Wrapper>
  );
}
