import { forwardRef } from 'react';
import ReactTextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';

function Textarea(
  { className, ...otherProps }: TextareaAutosizeProps,
  ref: React.Ref<HTMLTextAreaElement>,
) {
  return (
    <ReactTextareaAutosize
      ref={ref}
      className={`textarea ${className}`}
      {...otherProps}
    />
  );
}
export default forwardRef(Textarea);
