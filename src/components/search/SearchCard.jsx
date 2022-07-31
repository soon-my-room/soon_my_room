import React from 'react';
import styled from 'styled-components';
import UserProfileImg from '../profileImg/UserProfileImg';
import { Link } from 'react-router-dom';
import { profileImageCheck } from '../../utils/defaultImage';

const CardWrapper = styled.li``;

const CardContainer = styled.div`
  width: 358px;
  display: flex;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  width: 272px;
`;

const UserName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 5px 0px;
`;

const UserId = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--subtitle-text);
`;

const ColoredWord = styled.mark`
  background-color: transparent;
  color: #f26e22;
`;

export default function SearchCard({ keyword, ...props }) {
  function changeColorMatchingWord(word, keyword) {
    const excludeMatchingWordArr = word.split(keyword);
    const coloredWordArr = [];
    let k = 0;

    for (let i = 0; i < excludeMatchingWordArr.length * 2 - 1; i++) {
      if (i % 2 === 1) {
        coloredWordArr.push(<ColoredWord key={i}>{keyword}</ColoredWord>);
        continue;
      }

      coloredWordArr.push(excludeMatchingWordArr[i + k--]);
    }

    return coloredWordArr;
  }

  return (
    <CardWrapper>
      <Link to={`/profile/${props.accountname}`}>
        <CardContainer>
          <UserProfileImg src={profileImageCheck(props.src)} size='medium' />
          <UserInfo>
            <UserName>
              {changeColorMatchingWord(props.username, keyword).map(
                (word) => word,
              )}
            </UserName>
            <UserId>
              {changeColorMatchingWord(props.accountname, keyword).map(
                (word) => word,
              )}
            </UserId>
          </UserInfo>
        </CardContainer>
      </Link>
    </CardWrapper>
  );
}
