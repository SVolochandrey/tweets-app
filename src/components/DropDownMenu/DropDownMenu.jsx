import PropTypes from "prop-types";
import { Option, Select } from "./DropDownMenu.styled";

const options = [
  { value: "show all", label: "SHOW ALL" },
  { value: "follow", label: "FOLLOW" },
  { value: "followings", label: "FOLLOWINGS" },
];

const DropDownMenu = ({ value, setSelectedFilter }) => {
  const onChangeFilter = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <Select value={value} onChange={onChangeFilter}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

DropDownMenu.propTypes = {
  value: PropTypes.string.isRequired,
};
export default DropDownMenu;
