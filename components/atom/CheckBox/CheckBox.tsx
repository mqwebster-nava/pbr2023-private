export const CheckBox = ({ value, label, handleClick }) => {
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
