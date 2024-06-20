export interface FormData {
  name?: string;
  email: string;
  password: string;
}

export interface AuthFormProps {
  initialFormData: FormData;
  onSubmit: (formData: any) => void;
  submitButtonText: string;
  isSignUp?: boolean;
}
