import styled from 'styled-components';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import FollowProfileList from '../components/followProfile/FollowProfileList';

const Wrapper = styled.div`
  border: 1px solid var(--border-gray);
`;

export default function FollowPage({ title, ...props }) {
  return (
    <Wrapper>
      <TopNavBasic title={title} {...props} />
      <FollowProfileList
        searchFollow={title.toLowerCase().slice(0, -1)}
        {...props}
      />
    </Wrapper>
  );
}
