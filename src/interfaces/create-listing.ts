export interface CustomButtonProps {
  id?: string;
  value?: any;
  onClick?: (event: any) => void;
  isActive?: boolean;
  children?: React.ReactNode;
  className?: string;
  type?: string;
  text?: string;
}
export interface FormData {
  type: "rent" | "sale";
  name: string;
  bedrooms: number;
  bathrooms: number;
  parking: boolean;
  furnished: boolean;
  address: string;
  description: string;
  offer: boolean;
  regularPrice: number;
  discountedPrice: number;
  latitude: number;
  longitude: number;
}
