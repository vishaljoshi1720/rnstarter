/* eslint-disable react-refresh/only-export-components */
/**
 * Modal
 * Dependencies:
 * - @gorhom/bottom-sheet.
 */

import type {
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import type { CloseButtonProps, ModalHeaderProps, ModalProps, ModalRef } from './types';
import { BottomSheetModal as GorhomModal, useBottomSheet } from '@gorhom/bottom-sheet';
import * as React from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { Path, Svg } from 'react-native-svg';
import { Pressable } from '@/components/atoms/pressable';
import { AppText } from '@/components/atoms/text';
import { View } from '@/components/atoms/view';
import { translate } from '@/lib/i18n';
import { useTheme } from '@/theme';
import { styles } from './styles';

export type { CloseButtonProps, ModalHeaderProps, ModalProps } from './types';

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

export function Modal({
  ref,
  snapPoints: _snapPoints = ['60%'] as (string | number)[],
  title,
  detached = false,
  backgroundStyle,
  ...props
}: ModalProps & { ref?: ModalRef }) {
  const detachedProps = React.useMemo(
    () => getDetachedProps(detached),
    [detached],
  );
  const modal = useModal();
  const { theme } = useTheme();
  const snapPoints = React.useMemo(() => _snapPoints, [_snapPoints]);

  React.useImperativeHandle(
    ref,
    () => (modal.ref.current as BottomSheetModal) || null,
  );

  const renderHandleComponent = React.useCallback(
    () => (
      <>
        <View style={styles.handle} />
        <ModalHeader title={title} dismiss={modal.dismiss} />
      </>
    ),
    [title, modal.dismiss],
  );

  return (
    <GorhomModal
      {...props}
      {...detachedProps}
      ref={modal.ref}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={props.backdropComponent || renderBackdrop}
      enableDynamicSizing={false}
      handleComponent={renderHandleComponent}
      backgroundStyle={[
        { backgroundColor: theme.colors.surface.default },
        backgroundStyle,
      ]}
      handleIndicatorStyle={{ backgroundColor: theme.colors.border.default }}
    />
  );
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function CustomBackdrop({ style }: BottomSheetBackdropProps) {
  const { close } = useBottomSheet();
  const { theme } = useTheme();
  return (
    <AnimatedPressable
      onPress={() => close()}
      entering={FadeIn.duration(50)}
      exiting={FadeOut.duration(20)}
      style={[style, { backgroundColor: theme.colors.overlay.backdrop }]}
    />
  );
}

export function renderBackdrop(props: BottomSheetBackdropProps) {
  return <CustomBackdrop {...props} />;
}

function getDetachedProps(detached: boolean) {
  if (detached) {
    return {
      detached: true,
      bottomInset: 46,
      style: styles.detached,
    } as Partial<BottomSheetModalProps>;
  }
  return {} as Partial<BottomSheetModalProps>;
}

const ModalHeader = React.memo(({ title, dismiss }: ModalHeaderProps) => {
  const { theme } = useTheme();
  return (
    <>
      {title && (
        <View style={styles.headerRow}>
          <View style={styles.headerSpacer} />
          <View style={styles.headerTitleWrap}>
            <AppText variant="titleMedium" style={styles.headerTitle}>{title}</AppText>
          </View>
        </View>
      )}
      <CloseButton close={dismiss} fill={theme.colors.icon.default} />
    </>
  );
});

function CloseButton({ close, fill }: CloseButtonProps) {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={close}
      style={styles.closeButton}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      accessibilityLabel={translate('common.close_modal')}
      accessibilityRole="button"
      accessibilityHint={translate('common.close_modal_hint')}
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
