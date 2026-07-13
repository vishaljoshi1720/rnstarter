import type {
  BottomSheetModal,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import type * as React from 'react';

export type ModalProps = BottomSheetModalProps & {
  title?: string;
};

export type ModalRef = React.ForwardedRef<BottomSheetModal>;

export type ModalHeaderProps = {
  title?: string;
  dismiss: () => void;
};

export type CloseButtonProps = {
  close: () => void;
  fill: string;
};
