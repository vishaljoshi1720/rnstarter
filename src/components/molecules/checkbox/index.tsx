import type { IconProps, LabelProps, RootProps } from './types';
import * as React from 'react';
import { useCallback } from 'react';
import { I18nManager } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { MotiView } from '@/components/atoms/moti-view';
import { Pressable } from '@/components/atoms/pressable';
import { AppText } from '@/components/atoms/text';
import { View } from '@/components/atoms/view';
import { useTheme } from '@/theme';
import { styles } from './styles';

export type { LabelProps, RootProps } from './types';

export function Root({
  checked = false,
  children,
  onChange,
  disabled,
  style,
  ...props
}: RootProps) {
  const handleChange = useCallback(() => {
    onChange(!checked);
  }, [onChange, checked]);

  return (
    <Pressable
      onPress={handleChange}
      style={[
        styles.root,
        disabled && styles.rootDisabled,
        style,
      ]}
      accessibilityState={{ checked }}
      disabled={disabled}
      {...props}
    >
      {children}
    </Pressable>
  );
}

function Label({ text, testID, style }: LabelProps) {
  return (
    <AppText testID={testID} variant="bodyLarge" style={style}>
      {text}
    </AppText>
  );
}

export function CheckboxIcon({ checked = false }: IconProps) {
  const { theme } = useTheme();
  const color = checked ? theme.colors.brand.primary : theme.colors.border.default;
  return (
    <MotiView
      style={[
        styles.checkboxIcon,
        { borderColor: color },
      ]}
      from={{ backgroundColor: 'transparent', borderColor: theme.colors.border.disabled }}
      animate={{
        backgroundColor: checked ? color : 'transparent',
        borderColor: color,
      }}
      transition={{
        backgroundColor: { type: 'timing', duration: 100 },
        borderColor: { type: 'timing', duration: 100 },
      }}
    >
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: checked ? 1 : 0 }}
        transition={{ opacity: { type: 'timing', duration: 100 } }}
      >
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="m16.726 7-.64.633c-2.207 2.212-3.878 4.047-5.955 6.158l-2.28-1.928-.69-.584L6 12.66l.683.577 2.928 2.477.633.535.591-.584c2.421-2.426 4.148-4.367 6.532-6.756l.633-.64L16.726 7Z"
            fill={theme.colors.text.onBrand}
          />
        </Svg>
      </MotiView>
    </MotiView>
  );
}

function CheckboxRoot({ checked = false, children, ...props }: RootProps) {
  return (
    <Root checked={checked} accessibilityRole="checkbox" {...props}>
      {children}
    </Root>
  );
}

function CheckboxBase({
  checked = false,
  testID,
  label,
  ...props
}: RootProps) {
  return (
    <CheckboxRoot checked={checked} testID={testID} {...props}>
      <CheckboxIcon checked={checked} />
      {label
        ? (
            <Label
              text={label}
              testID={testID ? `${testID}-label` : undefined}
            />
          )
        : null}
    </CheckboxRoot>
  );
}

export const Checkbox = Object.assign(CheckboxBase, {
  Icon: CheckboxIcon,
  Root: CheckboxRoot,
  Label,
});

export function RadioIcon({ checked = false }: IconProps) {
  const { theme } = useTheme();
  const color = checked ? theme.colors.brand.primary : theme.colors.border.default;
  return (
    <MotiView
      style={[styles.radioIcon, { borderColor: color }]}
      from={{ borderColor: theme.colors.border.disabled }}
      animate={{ borderColor: color }}
      transition={{ borderColor: { duration: 100, type: 'timing' } }}
    >
      <MotiView
        style={[
          styles.radioDot,
          { backgroundColor: checked ? theme.colors.brand.primary : 'transparent' },
        ]}
        from={{ opacity: 0 }}
        animate={{ opacity: checked ? 1 : 0 }}
        transition={{ opacity: { duration: 50, type: 'timing' } }}
      />
    </MotiView>
  );
}

function RadioRoot({ checked = false, children, ...props }: RootProps) {
  return (
    <Root checked={checked} accessibilityRole="radio" {...props}>
      {children}
    </Root>
  );
}

function RadioBase({
  checked = false,
  testID,
  label,
  ...props
}: RootProps) {
  return (
    <RadioRoot checked={checked} testID={testID} {...props}>
      <RadioIcon checked={checked} />
      {label
        ? (
            <Label text={label} testID={testID ? `${testID}-label` : undefined} />
          )
        : null}
    </RadioRoot>
  );
}

export const Radio = Object.assign(RadioBase, {
  Icon: RadioIcon,
  Root: RadioRoot,
  Label,
});

export function SwitchIcon({ checked = false }: IconProps) {
  const { theme } = useTheme();
  const WIDTH = theme.size.switch.width;
  const HEIGHT = theme.size.switch.height;
  const THUMB_SIZE = theme.size.switch.thumb;
  const THUMB_OFFSET = 4;

  const translateX = checked
    ? THUMB_OFFSET
    : WIDTH - THUMB_SIZE - THUMB_OFFSET;

  const backgroundColor = checked ? theme.colors.brand.primary : theme.colors.border.default;

  return (
    <View style={styles.switchTrackWrap}>
      <View style={styles.switchTrackClip}>
        <View
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundColor,
          }}
        />
      </View>
      <MotiView
        style={{
          height: THUMB_SIZE,
          width: THUMB_SIZE,
          position: 'absolute',
          backgroundColor: theme.colors.surface.default,
          borderRadius: theme.radius.full,
          right: 0,
        }}
        animate={{
          translateX: I18nManager.isRTL ? translateX : -translateX,
        }}
        transition={{ translateX: { overshootClamping: true } }}
      />
    </View>
  );
}

function SwitchRoot({ checked = false, children, ...props }: RootProps) {
  return (
    <Root checked={checked} accessibilityRole="switch" {...props}>
      {children}
    </Root>
  );
}

function SwitchBase({
  checked = false,
  testID,
  label,
  ...props
}: RootProps) {
  return (
    <SwitchRoot checked={checked} testID={testID} {...props}>
      <SwitchIcon checked={checked} />
      {label
        ? (
            <Label text={label} testID={testID ? `${testID}-label` : undefined} />
          )
        : null}
    </SwitchRoot>
  );
}

export const Switch = Object.assign(SwitchBase, {
  Icon: SwitchIcon,
  Root: SwitchRoot,
  Label,
});
