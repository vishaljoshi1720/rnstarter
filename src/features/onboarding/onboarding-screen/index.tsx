import * as React from 'react';

import { useAppNavigation, useIsFirstTime } from '@/common/hooks';
import {
  AppText,
  Button,
  FocusAwareStatusBar,
  Screen,
  View,
} from '@/components';
import { translate } from '@/lib/i18n';
import { Cover } from '../components/cover';
import { styles } from './styles';

export function OnboardingScreen() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const { replaceToLogin } = useAppNavigation();

  return (
    <Screen style={styles.root}>
      <FocusAwareStatusBar />
      <View style={styles.coverWrap}>
        <Cover />
      </View>
      <View style={styles.content}>
        <AppText variant="displaySmall" style={styles.brand} tx="onboarding.brand" />
        <AppText
          variant="titleLarge"
          color="secondary"
          style={styles.tagline}
          tx="onboarding.tagline"
        />

        <AppText
          variant="bodyLarge"
          style={styles.featureFirst}
          tx="onboarding.feature_production"
        />
        <AppText variant="bodyLarge" style={styles.feature} tx="onboarding.feature_dx" />
        <AppText variant="bodyLarge" style={styles.feature} tx="onboarding.feature_minimal" />
        <AppText variant="bodyLarge" style={styles.feature} tx="onboarding.feature_libs" />
      </View>
      <View style={styles.cta}>
        <Button
          fullWidth
          label={translate('onboarding.cta')}
          onPress={() => {
            setIsFirstTime(false);
            replaceToLogin();
          }}
        />
      </View>
    </Screen>
  );
}
