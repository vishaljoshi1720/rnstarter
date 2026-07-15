# Forms Guide

Complete guide to building forms in this React Native application using React Hook Form, Zod validation, and our controlled component library.

---

## Quick Start

```tsx
import { z } from 'zod';
import { useForm, ControlledInput } from '@/lib/form';
import { Button } from '@/components';

// 1. Define schema
const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// 2. Create form
function LoginForm({ onSubmit }) {
  const { control, handleSubmit } = useForm(schema);
  
  return (
    <>
      <ControlledInput
        name="email"
        control={control}
        label="Email"
        placeholder="your@email.com"
      />
      <ControlledInput
        name="password"
        control={control}
        label="Password"
        secureTextEntry
      />
      <Button
        label="Login"
        onPress={handleSubmit(onSubmit)}
      />
    </>
  );
}
```

---

## Form Utilities

### `useForm(schema, options?)`

Wrapper around React Hook Form's `useForm` with Zod validation pre-configured.

```tsx
import { z } from 'zod';
import { useForm } from '@/lib/form';

const schema = z.object({
  name: z.string().min(2),
  age: z.number().min(18),
});

const form = useForm(schema, {
  defaultValues: {
    name: '',
    age: 0,
  },
  mode: 'onBlur', // Already set by default
});
```

**Returns:** `UseFormReturn<T>` from react-hook-form

---

## Controlled Components

All form components are wrapped with React Hook Form's controller logic. Just pass `name` and `control`.

### ControlledInput

```tsx
<ControlledInput
  name="email"
  control={control}
  label="Email Address"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  maxLength={100}
  showCharacterCount
/>
```

**Props:** All `InputProps` + `name`, `control`, `rules`

---

### ControlledSelect

```tsx
<ControlledSelect
  name="country"
  control={control}
  label="Country"
  options={[
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
  ]}
  helperText="Select your country"
/>
```

**Props:** All `SelectProps` + `name`, `control`, `rules`

---

### ControlledMultiSelect

```tsx
<ControlledMultiSelect
  name="interests"
  control={control}
  label="Interests"
  options={interestOptions}
/>
```

Automatically sets `multiple={true}` on Select component. Shows checkboxes, Select All/Clear buttons, and confirmation footer.

---

### ControlledSwitch

```tsx
<ControlledSwitch
  name="rememberMe"
  control={control}
  label="Remember me"
/>
```

**Props:** All `SwitchProps` + `name`, `control`, `rules`

---

### ControlledRadioGroup

```tsx
<ControlledRadioGroup
  name="gender"
  control={control}
  label="Gender"
  options={[
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ]}
/>
```

**Props:** All `RadioGroupProps` + `name`, `control`, `rules`

---

### ControlledPhoneInput

```tsx
<ControlledPhoneInput
  name="phone"
  control={control}
  label="Phone Number"
  country="US"
/>
```

Includes country picker with flags and dial codes.

---

### ControlledOTPInput

```tsx
<ControlledOTPInput
  name="otp"
  control={control}
  length={6}
/>
```

**Props:** All `OTPInputProps` + `name`, `control`, `rules`

---

### ControlledDatePicker

Date picker using `react-native-modal-datetime-picker` (industry standard with 200k+ weekly downloads).

```tsx
<ControlledDatePicker
  name="birthdate"
  control={control}
  label="Birth Date"
  placeholder="Select your birth date"
  minimumDate={new Date(1900, 0, 1)}
  maximumDate={new Date()}
  helperText="You must be 18 or older"
/>
```

**Props:** All `DatePickerInputProps` + `name`, `control`, `rules`

**Features:**
- Cross-platform modal picker (iOS/Android)
- Min/max date constraints
- Custom date formatting
- Native experience

---

### ControlledTimePicker

Time picker using `react-native-modal-datetime-picker`.

```tsx
<ControlledTimePicker
  name="meetingTime"
  control={control}
  label="Meeting Time"
  is24Hour
/>
```

**Props:** All `TimePickerInputProps` + `name`, `control`, `rules`

---

## Validation

### Built-in Patterns

```tsx
import { validationRules } from '@/lib/form';

const schema = z.object({
  email: z.string().regex(validationRules.email.pattern, validationRules.email.message),
  phone: z.string().regex(validationRules.phone.pattern, validationRules.phone.message),
  website: z.string().regex(validationRules.url.pattern, validationRules.url.message),
});
```

**Available rules:**
- `email`
- `phone`
- `url`
- `alphanumeric`
- `noSpecialChars`

---

### Custom Validation

```tsx
const schema = z.object({
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});
```

---

### Async Validation

```tsx
const schema = z.object({
  username: z.string()
    .min(3)
    .refine(
      async (username) => {
        const response = await fetch(`/api/check-username?username=${username}`);
        const { available } = await response.json();
        return available;
      },
      { message: 'Username is already taken' }
    ),
});
```

---

## Default Values

**CRITICAL RULE:** NEVER use `defaultValue` prop on controlled components. Always manage default values through React Hook Form.

### Synchronous Default Values

Pass `defaultValues` to `useForm`:

```tsx
const form = useForm(schema, {
  defaultValues: {
    name: 'John Doe',
    email: 'john@example.com',
    rememberMe: true,
  },
});
```

### Asynchronous Default Values (Loading from API)

Use `useFormWithDefaults` hook for forms that load data from an API:

```tsx
import { useFormWithDefaults } from '@/lib/form';

const profileSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  bio: z.string().optional(),
});

function ProfileForm() {
  const form = useFormWithDefaults(profileSchema, {
    load: () => api.getProfile(),
    transform: (data) => ({
      name: data.fullName,
      email: data.email,
      bio: data.biography || '',
    }),
    onError: (error) => toast.error(error.message),
  });

  // Show loading state while fetching defaults
  if (form.isLoadingDefaults) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ControlledInput name="name" control={form.control} label="Name" />
      <ControlledInput name="email" control={form.control} label="Email" />
      <ControlledInput name="bio" control={form.control} label="Bio" multiline />
      <Button label="Save" onPress={form.handleSubmit(onSubmit)} />
    </>
  );
}
```

### Updating Default Values

Use `reset()` to update form with new values:

```tsx
// Reset to new values
reset({
  name: 'Jane Doe',
  email: 'jane@example.com',
});

// Reset to original defaults
reset();

// Partial reset (only specified fields)
reset({ email: 'new@example.com' }, { keepValues: true });
```

### Why NOT defaultValue prop?

React Hook Form manages ALL form state centrally. Using `defaultValue` on individual controlled components breaks synchronization:

```tsx
// ❌ WRONG - Don't do this
<ControlledInput
  name="email"
  control={control}
  defaultValue="wrong@example.com"  // Breaks form state!
/>

// ✅ CORRECT - Use useForm's defaultValues
const form = useForm(schema, {
  defaultValues: { email: 'correct@example.com' },
});

<ControlledInput name="email" control={control} />
```

**Problems with defaultValue prop:**
- Form state and component state become out of sync
- `isDirty` flag doesn't work correctly
- `reset()` doesn't restore proper values
- Validation may run on wrong values

---

## Form State

### Accessing Form State

```tsx
const {
  control,
  handleSubmit,
  formState: { errors, isSubmitting, isValid, isDirty },
  reset,
  setValue,
  getValues,
  watch,
} = useForm(schema);
```

### Watching Fields

```tsx
// Watch single field
const email = watch('email');

// Watch multiple fields
const [email, password] = watch(['email', 'password']);

// Watch all fields
const formData = watch();
```

### Setting Values

```tsx
// Set single value
setValue('email', 'user@example.com');

// Set multiple values
setValue('email', 'user@example.com');
setValue('name', 'John Doe');
```

### Resetting Form

```tsx
import { resetFormDelayed } from '@/lib/form';

// Reset immediately
reset();

// Reset with delay (useful before navigation)
resetFormDelayed(form, 500);
```

---

## Error Handling

### Display Form-Level Errors

```tsx
import { getFirstError } from '@/lib/form';

const { formState: { errors } } = useForm(schema);
const firstError = getFirstError(errors);

{firstError && (
  <AppText color="error">{firstError}</AppText>
)}
```

### Check for Errors

```tsx
import { hasErrors, getErrorCount } from '@/lib/form';

const { formState: { errors } } = useForm(schema);

if (hasErrors(errors)) {
  console.log(`Form has ${getErrorCount(errors)} errors`);
}
```

---

## Form Submission

### Basic Submission

```tsx
const onSubmit = async (data) => {
  try {
    await api.login(data);
    navigation.navigate('Home');
  } catch (error) {
    showError(error.message);
  }
};

<Button
  label="Submit"
  onPress={handleSubmit(onSubmit)}
  loading={isSubmitting}
/>
```

### With Error Handling

```tsx
const onSubmit = async (data, event) => {
  try {
    const result = await api.createUser(data);
    reset();
    navigation.navigate('Success', { userId: result.id });
  } catch (error) {
    if (error.code === 'EMAIL_EXISTS') {
      setError('email', { message: 'Email already registered' });
    } else {
      showError('Something went wrong');
    }
  }
};
```

---

## Common Patterns

### Multi-Step Form

```tsx
const [step, setStep] = useState(1);
const form = useForm(schema);

const nextStep = async () => {
  const isValid = await form.trigger(); // Validate current step
  if (isValid) setStep(step + 1);
};
```

### Dependent Fields

```tsx
const accountType = watch('accountType');

<ControlledInput
  name="companyName"
  control={control}
  label="Company Name"
  disabled={accountType !== 'business'}
/>
```

### Dynamic Fields

```tsx
const { fields, append, remove } = useFieldArray({
  control,
  name: 'phones',
});

{fields.map((field, index) => (
  <View key={field.id}>
    <ControlledInput
      name={`phones.${index}.number`}
      control={control}
      label={`Phone ${index + 1}`}
    />
    <Button label="Remove" onPress={() => remove(index)} />
  </View>
))}

<Button label="Add Phone" onPress={() => append({ number: '' })} />
```

---

## Best Practices

1. **Define schemas at file level** - Not inside components
2. **Use controlled components** - Never use `Controller` directly
3. **Validate early** - Set `mode: 'onBlur'` (default in `useForm`)
4. **Provide helper text** - Guide users before errors occur
5. **Disable submit while submitting** - Pass `loading={isSubmitting}` to Button
6. **Reset forms after success** - Use `reset()` after successful submission
7. **Handle errors gracefully** - Use `try/catch` in `onSubmit`
8. **Use multiline for long text** - Set `multiline` prop on ControlledInput
9. **Show character counts** - Set `showCharacterCount` and `maxLength`
10. **Test forms thoroughly** - Include validation, submission, and error cases

---

## TypeScript Tips

### Infer Form Types

```tsx
const schema = z.object({
  email: z.string().email(),
  age: z.number(),
});

type FormData = z.infer<typeof schema>;
// { email: string; age: number }
```

### Type-Safe Controlled Components

```tsx
type FormData = {
  email: string;
  password: string;
};

const form = useForm(schema);

// TypeScript knows 'name' must be 'email' | 'password'
<ControlledInput<FormData>
  name="email" // ✓ Valid
  control={form.control}
/>
```

---

## Migration Guide

### From Manual Controller

**Before:**
```tsx
<Controller
  name="email"
  control={control}
  render={({ field, fieldState }) => (
    <Input
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      error={fieldState.error?.message}
    />
  )}
/>
```

**After:**
```tsx
<ControlledInput
  name="email"
  control={control}
/>
```

### From react-hook-form's useForm

**Before:**
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const form = useForm({
  resolver: zodResolver(schema),
  mode: 'onBlur',
});
```

**After:**
```tsx
import { useForm } from '@/lib/form';

const form = useForm(schema);
```

---

## Testing

```tsx
import { render, screen } from '@testing-library/react-native';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

test('validates email', async () => {
  const { user } = setup(<LoginForm />);
  
  await user.type(screen.getByTestId('email-input'), 'invalid');
  await user.press(screen.getByText('Submit'));
  
  expect(await screen.findByText('Invalid email')).toBeOnTheScreen();
});
```

---

## Troubleshooting

### Form not validating
- Ensure schema is passed to `useForm`
- Check `mode` setting (default: `onBlur`)
- Verify field names match schema keys

### Values not updating
- Ensure `name` prop is correct
- Check if `control` is passed
- Verify `onChangeText` isn't overridden

### TypeScript errors
- Ensure schema types match form data
- Check controlled component generics
- Verify import paths are correct

---

## Additional Resources

- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Component Creation Guide](../.cursor/rules/component-creation.mdc)
