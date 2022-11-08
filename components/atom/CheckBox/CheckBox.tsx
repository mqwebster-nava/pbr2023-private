

export interface CheckBoxProps {
  value: string;
  label:string;
  handleClick?: any;
}


export const CheckBox = ({ value, label, handleClick }: CheckBoxProps) => {
  return (
    <div className="block">
      <input
        className="mr-2"
        type="checkbox"
        id={value}
        name={value}
        value={value}
        onClick={handleClick}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};
