import styled from 'styled-components';

import { font, flexCenter } from 'style/mixins';

export const Form = styled.form`
  ${flexCenter({ fw: 'no-wrap', ai: 'center', jc: 'center' })};
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 200px;
  padding: ${props => props.theme.spacing(2)};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.greyBg};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.32);
`;
export const Input = styled.input`
  border: 0;
  outline: 0;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  background-color: ${props => props.theme.colors.buttonBg};
  ${font({ fs: 16, fw: 400, lh: 20 })};
  box-shadow: inset 2px 2px 5px ${props => props.theme.colors.colorShadow},
    inset -5px -5px 10px ${props => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  appearance: none;
  &:focus {
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;

export const BoxName = styled.div`
  width: 90%;
`;
export const BoxNumber = styled.div`
  width: 90%;
`;


export const Label = styled.label`
  ${font({ fs: 18, fw: 700, lh: 20 })};
  display: block;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border-radius: 20px;
  margin: 0 auto;
  padding: 10px 20px;
  ${font({ fs: 18, fw: 600, lh: 20 })};
  background-color: ${props => props.theme.colors.colorBg};
  color: ${props => props.theme.colors.buttonText};
  box-shadow: -1px -1px 5px ${props => props.theme.colors.white},
    5px 5px 10px ${props => props.theme.colors.colorShadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
  }
  &:active {
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.white};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;
