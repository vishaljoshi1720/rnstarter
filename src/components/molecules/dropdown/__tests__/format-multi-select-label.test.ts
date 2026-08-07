import { formatMultiSelectLabel } from '../format-label';

describe('formatMultiSelectLabel', () => {
  const data = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
  ];

  it('shows placeholder when empty', () => {
    expect(formatMultiSelectLabel([], data, 'Pick languages')).toBe('Pick languages');
  });

  it('shows the selected label for a single value', () => {
    expect(formatMultiSelectLabel(['en'], data, 'Pick languages')).toBe('English');
  });

  it('shows first label plus remaining count', () => {
    expect(formatMultiSelectLabel(['en', 'es', 'fr'], data, 'Pick languages')).toBe(
      'English +2',
    );
  });
});
