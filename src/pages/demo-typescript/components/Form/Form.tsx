import { useState, ChangeEvent } from 'react';

type Option = {
  value: number | string;
  label: string;
};

type SelectProps = {
  options: Option[];
};

const Select = ({ options }: SelectProps) => {
  const [value, setValue] = useState(options[0]?.value);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    console.debug(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

// `Select` usage
const mockOptions = [
  { value: 'banana', label: 'Banana 🍌' },
  { value: 'apple', label: 'Apple 🍎' },
  { value: 'coconut', label: 'Coconut 🥥' },
  { value: 'watermelon', label: 'Watermelon 🍉' },
];

const Form = () => {
  return <Select options={mockOptions} />;
};

export default Form;
