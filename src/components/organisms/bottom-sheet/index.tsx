/**
 * Bottom sheet modal (Gorhom v5).
 *
 * Defaults match library docs:
 * - enableDynamicSizing true when no snapPoints (content-sized sheets)
 * - topInset from safe area so sheet never covers status bar / notch
 * - enablePanDownToClose true for dismissible modals
 *
 * Put content in BottomSheetView or BottomSheetScrollView (re-exported).
 * Do not guess snap heights for small option lists.
 *
 * Android keyboard: edge-to-edge + adjustResize often fails — default to
 * `fillParent` + `adjustPan` on Android. Override per sheet when needed.
 */

import type {
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import type { CloseButtonProps, ModalHeaderProps, ModalProps, ModalRef } from './types';
import {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView,
  BottomSheetModal as GorhomModal,
} from '@gorhom/bottom-sheet';
import * as React from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Path, Svg } from 'react-native-svg';
import { Pressable } from '@/components/atoms/pressable';
import { AppText } from '@/components/atoms/text';
import { View } from '@/components/atoms/view';
import { translate } from '@/lib/i18n';
import { useTheme } from '@/theme';
import { styles } from './styles';
import { resolveEnableDynamicSizing } from './utils';

export type { CloseButtonProps, ModalHeaderProps, ModalProps } from './types';
export type { ModalRef };

export {
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView,
};

export { resolveEnableDynamicSizing, resolveSheetBottomPadding } from './utils';

const ANDROID_KEYBOARD_BEHAVIOR = 'fillParent' as const;
const ANDROID_KEYBOARD_INPUT_MODE = 'adjustPan' as const;

export function useModal() {
  const ref = React.useRef<BottomSheetModal>(null);
  const present = React.useCallback((data?: any) => {
    ref.current?.present(data);
  }, []);
  const dismiss = React.useCallback(() => {
    ref.current?.dismiss();
  }, []);
  return { ref, present, dismiss };
}

export const useBottomSheet = useModal;

function assignModalRef(
  localRef: React.MutableRefObject<BottomSheetModal | null>,
  ref: ModalRef | undefined,
  node: BottomSheetModal | null,
) {
  localRef.current = node;
  if (typeof ref === 'function')
    ref(node);
  else if (ref && 'current' in ref)
    (ref as React.MutableRefObject<BottomSheetModal | null>).current = node;
}

/**
 * Themed bottom-sheet modal. Ref is a live Gorhom instance (callback-ref merge).
 */
export function Modal({
  ref,
  title,
  detached = false,
  snapPoints,
  enableDynamicSizing,
  topInset: topInsetProp,
  bottomInset: bottomInsetProp,
  maxDynamicContentSize: maxDynamicProp,
  backgroundStyle,
  keyboardBehavior,
  keyboardBlurBehavior = 'restore',
  android_keyboardInputMode,
  enableBlurKeyboardOnGesture = true,
  enablePanDownToClose = true,
  closeAccessibilityLabel,
  closeAccessibilityHint,
  children,
  ...props
}: ModalProps & { ref?: ModalRef }) {
  const localRef = React.useRef<BottomSheetModal>(null);
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();

  const dynamicSizing = resolveEnableDynamicSizing(enableDynamicSizing, snapPoints);
  const topInset = topInsetProp ?? insets.top;
  const bottomInset
    = bottomInsetProp
      ?? (detached ? Math.max(insets.bottom, theme.spacing.lg) : 0);
  const maxDynamicContentSize
    = maxDynamicProp ?? Math.max(windowHeight - topInset - theme.spacing['2xl'], 200);

  const resolvedKeyboardBehavior
    = keyboardBehavior
      ?? (Platform.OS === 'android' ? ANDROID_KEYBOARD_BEHAVIOR : 'interactive');
  const resolvedAndroidKeyboardMode
    = android_keyboardInputMode
      ?? (Platform.OS === 'android' ? ANDROID_KEYBOARD_INPUT_MODE : 'adjustResize');

  const detachedProps = React.useMemo(
    () => getDetachedProps(detached),
    [detached],
  );

  const setRefs = React.useCallback(
    (node: BottomSheetModal | null) => assignModalRef(localRef, ref, node),
    [ref],
  );

  const dismiss = React.useCallback(() => {
    localRef.current?.dismiss();
  }, []);

  const renderHandleComponent = React.useCallback(
    () => (
      <>
        <View style={styles.handle} />
        <ModalHeader
          title={title}
          dismiss={dismiss}
          closeAccessibilityLabel={closeAccessibilityLabel}
          closeAccessibilityHint={closeAccessibilityHint}
        />
      </>
    ),
    [title, dismiss, closeAccessibilityLabel, closeAccessibilityHint],
  );

  const renderBackdrop = React.useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
        opacity={0.5}
      />
    ),
    [],
  );

  return (
    <GorhomModal
      {...props}
      {...detachedProps}
      ref={setRefs}
      index={0}
      snapPoints={snapPoints}
      enableDynamicSizing={dynamicSizing}
      topInset={topInset}
      bottomInset={bottomInset}
      maxDynamicContentSize={maxDynamicContentSize}
      enablePanDownToClose={enablePanDownToClose}
      backdropComponent={props.backdropComponent || renderBackdrop}
      handleComponent={renderHandleComponent}
      keyboardBehavior={resolvedKeyboardBehavior}
      keyboardBlurBehavior={keyboardBlurBehavior}
      android_keyboardInputMode={resolvedAndroidKeyboardMode}
      enableBlurKeyboardOnGesture={enableBlurKeyboardOnGesture}
      backgroundStyle={[
        { backgroundColor: theme.colors.surface.default },
        backgroundStyle,
      ]}
      handleIndicatorStyle={{ backgroundColor: theme.colors.border.default }}
    >
      {children}
    </GorhomModal>
  );
}

/** Alias — clearer than Modal for bottom sheets. */
export const BottomSheet = Modal;

function getDetachedProps(detached: boolean) {
  if (detached) {
    return {
      detached: true,
      style: styles.detached,
    } as Partial<BottomSheetModalProps>;
  }
  return {} as Partial<BottomSheetModalProps>;
}

const ModalHeader = React.memo(({
  title,
  dismiss,
  closeAccessibilityLabel,
  closeAccessibilityHint,
}: ModalHeaderProps) => {
  const { theme } = useTheme();
  const close = (
    <CloseButton
      close={dismiss}
      fill={theme.colors.icon.default}
      accessibilityLabel={closeAccessibilityLabel}
      accessibilityHint={closeAccessibilityHint}
    />
  );

  if (!title) {
    return <View style={styles.headerRowEnd}>{close}</View>;
  }

  return (
    <View style={styles.headerRow}>
      <View style={styles.headerSpacer} />
      <View style={styles.headerTitleWrap}>
        <AppText variant="titleMedium" style={styles.headerTitle}>{title}</AppText>
      </View>
      <View style={[styles.headerSpacer, styles.headerAction]}>
        {close}
      </View>
    </View>
  );
});

function CloseButton({
  close,
  fill,
  accessibilityLabel,
  accessibilityHint,
}: CloseButtonProps) {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={close}
      style={styles.closeButton}
      hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
      accessibilityLabel={accessibilityLabel ?? translate('common.close_modal')}
      accessibilityRole="button"
      accessibilityHint={accessibilityHint ?? translate('common.close_modal_hint')}
    >
      <Svg
        width={theme.icon.md}
        height={theme.icon.md}
        fill={fill}
        viewBox="0 0 24 24"
      >
        <Path d="M18.707 6.707a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293Z" />
      </Svg>
    </Pressable>
  );
}
