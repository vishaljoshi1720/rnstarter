import type { Control } from 'react-hook-form';

import * as React from 'react';
import {
  ControlledCheckbox,
  ControlledCheckboxGroup,
  ControlledDatePicker,
  ControlledDropdown,
  ControlledInput,
  ControlledMultiSelectDropdown,
  ControlledOTPInput,
  ControlledRadioGroup,
  ControlledSwitch,
  ControlledTimePicker,
} from '@/lib/form';
import { Section } from '../section';

type Option = { label: string; value: string };

type FormValues = {
  email: string;
  country: string;
  interests: (string | number)[];
  role: string;
  otp: string;
  features: string[];
  accept: boolean;
  startDate?: Date;
  reminder?: Date;
  notifications: boolean;
};

export function FormSection({
  control,
  options,
}: {
  control: Control<FormValues>;
  options: Option[];
}) {
  return (
    <Section title="Form · controlled wrappers">
      <ControlledInput
        name="email"
        control={control}
        label="Email"
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        testID="playground-email"
      />
      <ControlledDropdown
        name="country"
        control={control}
        label="Country"
        data={options}
      />
      <ControlledMultiSelectDropdown
        name="interests"
        control={control}
        label="Interests"
        data={options}
      />
      <ControlledCheckboxGroup
        name="features"
        control={control}
        label="Features"
        options={options}
      />
      <ControlledCheckbox
        name="accept"
        control={control}
        label="I accept the terms"
      />
      <ControlledRadioGroup
        name="role"
        control={control}
        label="Role"
        options={[
          { value: 'dev', label: 'Developer' },
          { value: 'design', label: 'Designer' },
        ]}
      />
      <ControlledOTPInput
        name="otp"
        control={control}
        label="OTP"
        length={6}
        testID="playground-form-otp"
      />
      <ControlledDatePicker
        name="startDate"
        control={control}
        label="Start date"
      />
      <ControlledTimePicker
        name="reminder"
        control={control}
        label="Reminder"
      />
      <ControlledSwitch
        name="notifications"
        control={control}
        label="Email me updates"
      />
    </Section>
  );
}
