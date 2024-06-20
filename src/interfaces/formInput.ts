export interface FormInputProps {
    type: string;
    id: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }