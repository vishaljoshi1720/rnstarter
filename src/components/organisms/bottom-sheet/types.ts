import type {
  BottomSheetModal,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import type * as React from 'react';

/**
 * Gorhom requires snapPoints only when enableDynamicSizing is false.
 * Our Modal defaults dynamic sizing on when snapPoints omitted.
 */
export type ModalProps = Omit<BottomSheetModalProps, 'children' | 'snapPoints'> & {
  title?: string;
  snapPoints?: BottomSheetModalProps['snapPoints'];
  children?: BottomSheetModalProps['children'];
  /** Override i18n close label (recommended for shared-kit use). */
  closeAccessibilityLabel?: string;
  closeAccessibilityHint?: string;
};

export type ModalRef = React.Ref<BottomSheetModal | null>;

export type ModalHeaderProps = {
  title?: string;
  dismiss: () => void;
  closeAccessibilityLabel?: string;
  closeAccessibilityHint?: string;
};

export type CloseButtonProps = {
  close: () => void;
  fill: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};
