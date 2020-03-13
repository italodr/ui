import React from 'react';
import Link from 'next/Link';

import placeholder from '../../assets/img/placeholder.jpg';
import CardStyled from './styles';

class Card extends React.Component {
  render() {
    const { slug, name, img } = this.props;

    return (
      <CardStyled>
        <Link href={slug}>
          <a>
            <img src={placeholder} alt={`${name} component`} />
            <p>{name}</p>
          </a>
        </Link>
      </CardStyled>
    );
  }
}

export default Card;
