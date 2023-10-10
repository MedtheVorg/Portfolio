import { type FieldErrors, type FieldValues } from 'react-hook-form';
import { BiSolidErrorCircle } from 'react-icons/bi';
type ErrorLMessageProps = {
  errorObject: FieldErrors<FieldValues>;
  target: string;
};

const ErrorMessage = ({ errorObject, target }: ErrorLMessageProps) => {
  return (
    <>
      {errorObject[target] && (
        <p className="p-2  text-[#cf364a] flex items-center justify-start">
          <BiSolidErrorCircle className="inline-block text-[#cf364a] mr-2" />
          {errorObject[target]!.message as string}
        </p>
      )}
    </>
  );
};
export default ErrorMessage;
