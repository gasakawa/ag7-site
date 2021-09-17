import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import ITextBox from 'interfaces/i-textbox';

import * as S from 'styles/textbox';

const TextBox = (data: ITextBox) => {
  return (
    <S.TextBoxWrapper>
      <S.TextBoxSubtitle>{data.subtitle}</S.TextBoxSubtitle>
      <S.TextBoxTitle>{data.title}</S.TextBoxTitle>
      <S.TextBoxDescription>
        <ReactMarkdown>{data.description}</ReactMarkdown>
      </S.TextBoxDescription>
    </S.TextBoxWrapper>
  );
};

export default TextBox;
