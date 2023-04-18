import { useToggle } from '@/common/hooks/useToggle';
import { syncValidation } from '@/common/validations/syncValidation';
import { useId } from 'react';
type PrivateProps = {
  value: string | number;
  type: 'text' | 'number' | 'password';
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};
function Input({
  onChange,
  value,
  type,
  placeholder,
  className,
}: PrivateProps) {
  const id = useId();
  const [isFocused, toggleIsFocused] = useToggle();
  const isValidString = syncValidation.isNotEmpty(value.toString());
  const isShowPlaceholder = !isFocused && !isValidString;
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <div className={`input-container ${className ? className : ''}`}>
      {placeholder && (
        <label className={isShowPlaceholder ? 'show' : 'hide'} htmlFor={id}>
          {placeholder}
        </label>
      )}
      <input
        onFocus={() => toggleIsFocused(true)}
        onBlur={() => toggleIsFocused(false)}
        value={value}
        onChange={handleChange}
        id={id}
        type={type}
      />
    </div>
  );
}

export default Input;
