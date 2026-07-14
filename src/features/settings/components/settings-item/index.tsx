import type { SettingsItemProps } from './types';

import * as React from 'react';
import { AppText, Pressable, View } from '@/components';
import { Icon } from '@/components/atoms/icon';
import { translate } from '@/lib/i18n';
import { styles } from './styles';

export type { SettingsItemProps } from './types';

export function SettingsItem({ text, value, icon, onPress }: SettingsItemProps) {
  const isPressable = onPress !== undefined;

  return (
    <Pressable
      onPress={onPress}
      pointerEvents={isPressable ? 'auto' : 'none'}
      style={styles.row}
    >
      <View style={styles.left}>
        {icon && <View style={styles.iconWrap}>{icon}</View>}
        <AppText tx={text} />
      </View>
      <View style={styles.right}>
        <AppText color="secondary">{value}</AppText>
        {isPressable && (
          <View style={styles.arrowWrap}>
            <Icon name="arrow-right" accessibilityLabel={translate('common.navigate')} />
          </View>
        )}
      </View>
    </Pressable>
  );
}
