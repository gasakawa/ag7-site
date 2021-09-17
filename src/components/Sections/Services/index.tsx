import React from 'react';
import ICardWithIcon from 'interfaces/i-card-with-icon';
import IServices from 'interfaces/i-services';

import * as S from 'styles/services';
import CardWithIcon from 'components/CardWithIcon';
import TextBox from 'components/TextBox';

const Services = (data: IServices) => {
  const iconStyles = [
    {
      color: '#0674E7',
      radius: '60px 30px 20px 45px',
    },
    { color: '#CA5691', radius: '60px 90px 30px 35px' },
    { color: '#E76814', radius: '30px 30px 30px 50px' },
  ];

  return (
    <>
      <S.ServicesWrapper id='servicios'>
        <S.ServicesSection>
          <S.ServiceTextBlock>
            <TextBox {...data.textBox} />
          </S.ServiceTextBlock>
        </S.ServicesSection>
      </S.ServicesWrapper>
      <S.ServicesCardsSection>
        <S.ServicesCardsWrapper>
          {data.cards.map((card: ICardWithIcon, pos: number) => (
            <CardWithIcon
              key={card.id}
              title={card.Title}
              description={card.Description}
              iconUrl={card.Icon.url}
              iconAlt={card.Icon.alternativeText}
              iconBackgroundColor={iconStyles[pos].color}
              iconBorderRadius={iconStyles[pos].radius}
            />
          ))}
        </S.ServicesCardsWrapper>
      </S.ServicesCardsSection>
    </>
  );
};

export default Services;
