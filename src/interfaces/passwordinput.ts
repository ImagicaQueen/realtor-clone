export interface PasswordInputProps {
    id: string;
    name?: string;
    placeholder?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  