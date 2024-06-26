export interface AuthFormFromData {
  name?: string;
  email: string;
  password: string;
}

export interface AuthFormProps {
  onSubmit: (formData: any) => void;
  submitButtonText: string | any;
  isSignUp?: boolean;
}
