import type { DropdownItem } from './types';

export function formatMultiSelectLabel(
  value: (string | number)[],
  data: DropdownItem[],
  placeholder: string,
): string {
  if (value.length === 0)
    return placeholder;

  const first = data.find(item => String(item.value) === String(value[0]));
  const firstLabel = first?.label ?? String(value[0]);
  if (value.length === 1)
    return firstLabel;

  return `${firstLabel} +${value.length - 1}`;
}
