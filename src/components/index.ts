/**
 * Public UI surface for this template.
 *
 * CORE (exported here): what every new app needs day one.
 * OPTIONAL: deep-import `@/components/<layer>/<name>` — not in this barrel.
 */

export { Button } from './atoms/button';
export type { ButtonProps, ButtonSize, ButtonVariant } from './atoms/button';

export { Checkbox } from './atoms/checkbox';
export type { CheckboxProps, CheckboxSize } from './atoms/checkbox';

export { Icon } from './atoms/icon';
export type { IconName, IconProps } from './atoms/icon';

export { Image } from './atoms/image';
export type { AppImageProps } from './atoms/image';

export { Input } from './atoms/input';
export type { InputProps, InputSize, InputTextInputComponent } from './atoms/input';

export { Switch } from './atoms/switch';
export type { SwitchProps } from './atoms/switch';

export { AppText } from './atoms/text';
export type { AppTextColor, AppTextProps, AppTextVariant } from './atoms/text';

export { Field } from './molecules/field';
export type { FieldProps } from './molecules/field';

export { ScreenHeader } from './molecules/screen-header';
export type { ScreenHeaderProps } from './molecules/screen-header';

export {
  BottomSheet,
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView,
  Modal,
  useBottomSheet,
  useModal,
} from './organisms/bottom-sheet';
export type {
  ModalProps,
} from './organisms/bottom-sheet';

export { Screen } from './organisms/screen';
export type {
  ScreenFooter,
  ScreenHeaderConfig,
  ScreenInset,
  ScreenKeyboard,
  ScreenLayout,
  ScreenProps,
  ScreenRefresh,
  ScreenSafeArea,
} from './organisms/screen';

// Navigation helpers: import from '@/components/navigation'
// Optional fields (CheckboxGroup, DateTimeField, Dropdown, OTP, Phone, RadioGroup, …):
//   import from '@/components/molecules/<name>'
