import "../RadioButtonsGroup/RadioButton.css";
import RadioButtonsGroup from "../RadioButtonsGroup/RadioButtonsGroup";

const FilterBox = ({ title, items }) => {
  const renderFilterBox = (items) =>
    items.map((item) => (
      <div className="filter-box" key={item.key}>
          <div className="filter-box__header">
            <p className="filter-box__title">{item.denumire}</p>
          </div>
        
          <RadioButtonsGroup radioValues={item.valori} onChange={() => true} />
          
      </div>
    ));

  return renderFilterBox(items);
};



FilterBox.defaultProps = {
  title: "",
  items: [],
};

export default FilterBox;



