import React from "react";
import TextBox from "components/TextBox";

import * as S from "styles/about-us";
import IAboutUs from "interfaces/i-about-us";
import CardOnlyText from "components/CardOnlyText";

const AboutUs = (data: IAboutUs) => {
  return (
    <S.AboutUsWrapper id="about">
      <S.AboutUsSection>
        <S.AboutUsTextSection>
          <TextBox {...data.textBox} />
        </S.AboutUsTextSection>
        <S.AboutUsCardsSection>
          <S.AboutUsCardsColumn>
            <CardOnlyText
              title={data.cards[0].title}
              description={data.cards[0].description}
              backgroundColor="#CCE2FF"
              bodyColor="#000"
              titleColor="#286A96"
              borderHoverColor="#286A96"
            />
            <CardOnlyText
              title={data.cards[2].title}
              description={data.cards[2].description}
              backgroundColor="#0674E7"
              bodyColor="#fff"
              titleColor="#fff"
              borderHoverColor="#0674E7"
            />
          </S.AboutUsCardsColumn>
          <S.AboutUsCardsColumn>
            <CardOnlyText
              title={data.cards[1].title}
              description={data.cards[1].description}
              backgroundColor="#CA5590"
              bodyColor="#fff"
              titleColor="#fff"
              borderHoverColor="#CA5590"
            />
            <CardOnlyText
              title={data.cards[3].title}
              description={data.cards[3].description}
              backgroundColor="#E76802"
              bodyColor="#fff"
              titleColor="#fff"
              borderHoverColor="#E76802"
            />
          </S.AboutUsCardsColumn>
        </S.AboutUsCardsSection>
      </S.AboutUsSection>
    </S.AboutUsWrapper>
  );
};

export default AboutUs;
