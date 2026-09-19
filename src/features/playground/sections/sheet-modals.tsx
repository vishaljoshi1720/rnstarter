import * as React from 'react';
import {
  AppText,
  BottomSheetView,
  Button,
  Modal,
} from '@/components';
import { playgroundStyles } from '../styles';

type SheetModalsProps = {
  simpleRef: React.ComponentProps<typeof Modal>['ref'];
  onDismissSimple: () => void;
};

export function SheetModals({
  simpleRef,
  onDismissSimple,
}: SheetModalsProps) {
  return (
    <Modal ref={simpleRef} title="Playground sheet">
      <BottomSheetView style={playgroundStyles.sheetBody}>
        <AppText variant="bodyMedium" color="secondary">
          Content-sized sheet. Dismiss via close or backdrop.
        </AppText>
        <Button
          label="Close"
          variant="secondary"
          onPress={onDismissSimple}
          style={playgroundStyles.sheetButton}
        />
      </BottomSheetView>
    </Modal>
  );
}
