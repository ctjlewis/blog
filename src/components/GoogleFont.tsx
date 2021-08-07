import { Component, createRef } from "react";

type FontParams = {
  family: string;
  weights?: number[];
}

/**
 * Automatically generate <link href=...> for the specified Google Fonts.
 */
export const GoogleFont = ({ family, weights = [400, 800] }) => {
  const href =
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')
    }${weights.length
      ? `:wght@${weights.join(';')}`
      : ''
    }&display=swap`;

  // const linkSource =
  //   `<link
  //       href="${href}"
  //       rel="preload"
  //       as="style"
  //       onload="this.onload = null; this.rel = 'stylesheet';"
  //     />`;
  /**
   * Deferring font load.
   * 
   * @see https://web.dev/defer-non-critical-css/
   */
  return (
    <link rel="stylesheet" href={href} />
  );
}

// export class GoogleFont extends Component<FontParams> {
//   render() {
//     const { family, weights = [400, 800] } = this.props;
//     const href =
//       `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')
//       }${weights.length
//         ? `:wght@${weights.join(';')}`
//         : ''
//       }&display=swap`;

//     // const linkSource =
//     //   `<link
//     //       href="${href}"
//     //       rel="preload"
//     //       as="style"
//     //       onload="this.onload = null; this.rel = 'stylesheet';"
//     //     />`;
//     /**
//      * Deferring font load.
//      * 
//      * @see https://web.dev/defer-non-critical-css/
//      */
//     return (
//       <link rel="stylesheet" href={href} />
//     );
//   }
// }