import CustomButton from "./CustomButton";

const ToggleButtonGroup = ({
  options,
  selectedValue,
  onChange,
}: {
  options: { label: string; value: any }[];
  selectedValue: any;
  onChange: (event: any) => void;
}) => {
  return (
    <div className="flex">
      {options.map((option, index) => (
        <CustomButton
          key={index}
          id={option.value.toString()}
          type="button"
          value={option.value}
          onClick={onChange}
          isActive={selectedValue === option.value}
          className={`mr-3 w-full ${index !== 0 ? "ml-3" : ""}`}
        >
          {option.label}
        </CustomButton>
      ))}
    </div>
  );
};
export default ToggleButtonGroup;
