import * as React from 'react';

import { useAppNavigation, useIsFirstTime } from '@/common/hooks';
import {
  Button,
  FocusAwareStatusBar,
  Screen,
  Text,
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
        <Text style={styles.brand} tx="onboarding.brand" />
        <Text style={styles.tagline} tx="onboarding.tagline" />

        <Text style={styles.featureFirst} tx="onboarding.feature_production" />
        <Text style={styles.feature} tx="onboarding.feature_dx" />
        <Text style={styles.feature} tx="onboarding.feature_minimal" />
        <Text style={styles.feature} tx="onboarding.feature_libs" />
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
