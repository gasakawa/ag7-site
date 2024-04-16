import React from "react";

import IClient from "interfaces/i-client";
import TextBox from "components/TextBox";

import * as S from "styles/client";
import Gallery from "components/Gallery";

const Client = (data: IClient) => {
  return (
    <>
      <S.ClientWrapper id="clients">
        <S.ClientTextBoxSection>
          <TextBox {...data.textBox} />
        </S.ClientTextBoxSection>
      </S.ClientWrapper>

      <Gallery images={data.slider} />
    </>
  );
};

export default Client;
