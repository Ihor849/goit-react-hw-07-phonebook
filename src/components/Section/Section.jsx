

import { BoxSection, BoxTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <BoxSection>
      <BoxTitle>{title}</BoxTitle>
      {children}
    </BoxSection>
  );
};


