import * as React from 'react';
import { View } from 'react-native';
import { Button, Checkbox, Image, Input, Switch } from '@/components';
import { Icon } from '@/components/atoms/icon';
import { RadioButton } from '@/components/atoms/radio-button';
import { Section } from '../section';
import { playgroundStyles } from '../styles';

export function AtomsSection() {
  const [clearable, setClearable] = React.useState('Clear me');
  const [notes, setNotes] = React.useState('');
  const [switchOn, setSwitchOn] = React.useState(true);
  const [radio, setRadio] = React.useState('a');
  const [checked, setChecked] = React.useState(true);
  const [indeterminate, setIndeterminate] = React.useState(true);

  return (
    <Section title="Atoms · Button / Input / Switch / Checkbox / Image">
      <View style={playgroundStyles.row}>
        <Button label="Default" onPress={() => {}} />
        <Button label="Secondary" variant="secondary" onPress={() => {}} />
      </View>
      <View style={playgroundStyles.row}>
        <Button label="Outline" variant="outline" onPress={() => {}} />
        <Button label="Ghost" variant="ghost" onPress={() => {}} />
      </View>
      <View style={playgroundStyles.row}>
        <Button label="Loading" loading onPress={() => {}} />
        <Button label="Disabled" disabled onPress={() => {}} />
      </View>
      <Button
        size="icon"
        leftIcon={<Icon name="settings" size={24} />}
        accessibilityLabel="Settings"
        onPress={() => {}}
      />
      <Input
        label="Clearable"
        value={clearable}
        onChangeText={setClearable}
        clearable
        testID="playground-clearable"
      />
      <Input
        label="Text area"
        value={notes}
        onChangeText={setNotes}
        multiline
        numberOfLines={4}
        placeholder="Type notes here…"
        testID="playground-textarea"
      />
      <Input
        label="With error"
        value="bad"
        onChangeText={() => {}}
        error="Looks wrong"
      />
      <Checkbox
        label="Accept terms"
        checked={checked}
        onCheckedChange={setChecked}
        testID="playground-checkbox"
      />
      <Checkbox
        label="Indeterminate"
        checked={false}
        indeterminate={indeterminate}
        onCheckedChange={() => {
          setIndeterminate(false);
          setChecked(true);
        }}
      />
      <Switch
        label="Notifications"
        value={switchOn}
        onValueChange={setSwitchOn}
        testID="playground-switch"
      />
      <View style={playgroundStyles.row}>
        <RadioButton
          label="A"
          value="a"
          selected={radio === 'a'}
          onSelect={setRadio}
        />
        <RadioButton
          label="B"
          value="b"
          selected={radio === 'b'}
          onSelect={setRadio}
        />
      </View>
      <Image
        source={{ uri: 'https://picsum.photos/seed/rnstarter/320/180' }}
        style={playgroundStyles.image}
        accessibilityLabel="Demo photo"
        testID="playground-image"
      />
    </Section>
  );
}
