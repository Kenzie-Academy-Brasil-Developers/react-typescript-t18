import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
   error?: FieldError;
}

export const Input = forwardRef(
   ({ error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
      return (
         <div>
            <input ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
         </div>
      );
   }
);
