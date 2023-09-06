import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    error?: FieldError;
}

export const Textarea = forwardRef(({ error, ...rest }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
   return (
      <div>
         <textarea ref={ref} {...rest}></textarea>
         {error ? <p>{error.message}</p> : null}
      </div>
   );
});
