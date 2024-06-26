import { css } from '@codecademy/gamut-styles';
import { StyleProps } from '@codecademy/variance';
import styled from '@emotion/styled';

import { Box } from '../../Box';
import { Selectors } from '../../ButtonBase/ButtonBase';
import {
  inlineToolTipBodyAlignments,
  toolTipAlignmentVariants,
  toolTipBodyCss,
} from './styles';

export const TipWrapper = styled.div(
  css({ position: 'relative', display: 'inline-flex' })
);

enum TargetSelectors {
  OUTLINE = '&:before',
  OUTLINE_FOCUS_VISIBLE = '&:focus-visible:before',
}

export const TargetContainer = styled(Box)(
  css({
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    padding: 0,
    [Selectors.FOCUS_VISIBLE]: {
      outline: 'none',
    },
    [TargetSelectors.OUTLINE]: {
      content: "''",
      position: 'absolute',
      inset: -2,
      borderRadius: '4px',
      border: 2,
      borderColor: 'primary',
      opacity: 0,
      zIndex: 0,
    },
    [TargetSelectors.OUTLINE_FOCUS_VISIBLE]: {
      opacity: 1,
    },
  })
);

export interface ToolTipContainerProps
  extends StyleProps<typeof toolTipAlignmentVariants> {}

export const TipBody = styled(Box)<
  StyleProps<typeof inlineToolTipBodyAlignments>
>(css({ ...toolTipBodyCss }), inlineToolTipBodyAlignments);
