import * as React from 'react';
import { Platform } from 'react-native';
import {
  AppText,
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView,
  Button,
  Modal,
} from '@/components';
import { toast } from '@/lib/toast';
import { playgroundStyles } from '../styles';

type SheetModalsProps = {
  simpleRef: React.ComponentProps<typeof Modal>['ref'];
  formRef: React.ComponentProps<typeof Modal>['ref'];
  onDismissSimple: () => void;
  onDismissForm: () => void;
};

export function SheetModals({
  simpleRef,
  formRef,
  onDismissSimple,
  onDismissForm,
}: SheetModalsProps) {
  const [sheetName, setSheetName] = React.useState('');
  const [sheetNote, setSheetNote] = React.useState('');

  return (
    <>
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

      <Modal
        ref={formRef}
        title="Sheet form"
        // Fixed snaps avoid Android dynamic-sizing + keyboard deadlocks.
        snapPoints={Platform.OS === 'android' ? ['55%', '92%'] : undefined}
        enableDynamicSizing={Platform.OS !== 'android'}
      >
        <BottomSheetScrollView
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
          contentContainerStyle={playgroundStyles.sheetBody}
        >
          <AppText variant="bodyMedium" color="secondary">
            Uses BottomSheetTextInput so the sheet tracks the keyboard on iOS and Android.
          </AppText>
          <BottomSheetTextInput
            value={sheetName}
            onChangeText={setSheetName}
            placeholder="Name"
            style={playgroundStyles.sheetInput}
            testID="sheet-form-name"
            autoCorrect={false}
          />
          <BottomSheetTextInput
            value={sheetNote}
            onChangeText={setSheetNote}
            placeholder="Notes"
            multiline
            style={[playgroundStyles.sheetInput, playgroundStyles.sheetInputMultiline]}
            testID="sheet-form-note"
          />
          <Button
            label="Save"
            onPress={() => {
              toast.success('Sheet form saved');
              onDismissForm();
            }}
            fullWidth
          />
        </BottomSheetScrollView>
      </Modal>
    </>
  );
}
