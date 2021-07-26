import { Component } from "react";

type FontParams =  {
  family: string;
  weights?: number[];
}

/**
 * Automatically generate <link href=...> for the specified Google Fonts.
 */
export class GoogleFont extends Component<FontParams> {
  render() {
    const { family, weights = [ 400, 800 ] } = this.props;
    const href = 
      `https://fonts.googleapis.com/css2?family=${
        family.replace(/ /g, '+')
      }${
        weights.length
          ? `:wght@${weights.join(';')}`
          : ''
      }&display=swap`;
      
    return (
      <link
        rel="stylesheet"
        href={href}
      />
    );
  }
}