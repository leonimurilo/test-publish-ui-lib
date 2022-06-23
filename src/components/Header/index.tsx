import React from 'react';
import {
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Flex,
} from '@patternfly/react-core';

type Item = {
  label: string;
  id: string;
};

export type Props = {
  logoText?: string;
  items: Item[];
  onEarlyAccessClick?: () => void;
};

const Header = ({ logoText = 'Logo', items, onEarlyAccessClick }: Props) => (
  <Masthead id="basic-mixed" display={{ default: 'inline' }}>
    <MastheadMain>
      <MastheadBrand>{logoText}</MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <Flex>
        {items.map((item) => (
          <span key={item.id}>{item.label}</span>
        ))}
        <Button variant="primary" type="button" onClick={onEarlyAccessClick}>
          Early access
        </Button>
      </Flex>
    </MastheadContent>
  </Masthead>
);

export default Header;
