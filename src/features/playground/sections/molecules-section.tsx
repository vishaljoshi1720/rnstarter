import * as React from 'react';
import { Button } from '@/components';
import { CheckboxGroup } from '@/components/molecules/checkbox-group';
import { DateTimeField } from '@/components/molecules/date-time-field';
import { Dropdown, MultiSelectDropdown } from '@/components/molecules/dropdown';
import { OTPInput } from '@/components/molecules/otp-input';
import { PhoneInput } from '@/components/molecules/phone-input';
import { RadioGroup } from '@/components/molecules/radio-group';
import { Section } from '../section';

type Option = { label: string; value: string };

export function MoleculesSection({
  options,
  onOpenSheet,
  onOpenSheetForm,
}: {
  options: Option[];
  onOpenSheet: () => void;
  onOpenSheetForm: () => void;
}) {
  const [dropdown, setDropdown] = React.useState<string | number | undefined>();
  const [multi, setMulti] = React.useState<(string | number)[]>([]);
  const [otp, setOtp] = React.useState('');
  const [date, setDate] = React.useState<Date | undefined>();
  const [plan, setPlan] = React.useState('a');
  const [features, setFeatures] = React.useState<string[]>(['alpha']);
  const [phone, setPhone] = React.useState('');

  return (
    <Section title="Molecules · standalone">
      <Dropdown
        label="Dropdown"
        data={options}
        value={dropdown}
        onChange={setDropdown}
        placeholder="Pick one"
        testID="playground-dropdown"
      />
      <MultiSelectDropdown
        label="Multi-select"
        data={options}
        value={multi}
        onChange={setMulti}
        placeholder="Pick many"
        testID="playground-multi"
      />
      <CheckboxGroup
        label="Features"
        options={options}
        value={features}
        onValueChange={setFeatures}
        testID="playground-checkbox-group"
      />
      <PhoneInput
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        testID="playground-phone"
      />
      <DateTimeField
        label="Date"
        mode="date"
        value={date}
        onChange={setDate}
        testID="playground-date"
      />
      <OTPInput
        value={otp}
        onChangeText={setOtp}
        length={6}
        testID="playground-otp"
      />
      <RadioGroup
        label="Plan"
        value={plan}
        onValueChange={setPlan}
        options={[
          { value: 'a', label: 'Starter' },
          { value: 'b', label: 'Pro' },
          { value: 'c', label: 'Disabled', disabled: true },
        ]}
      />
      <Button
        label="Open bottom sheet"
        variant="outline"
        onPress={onOpenSheet}
        testID="playground-open-sheet"
      />
      <Button
        label="Open sheet form (keyboard)"
        variant="outline"
        onPress={onOpenSheetForm}
        testID="playground-open-sheet-form"
      />
    </Section>
  );
}
