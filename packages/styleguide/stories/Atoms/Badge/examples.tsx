import { Badge } from '@codecademy/gamut';
import { Background } from '@codecademy/gamut-styles';

export const TertiaryFillExample = () => {
  return (
    <Background bg="background-primary">
      <Badge variant="tertiary">tertiary</Badge>
      <Badge variant="tertiaryFill">tertiaryFill</Badge>
    </Background>
  );
};
