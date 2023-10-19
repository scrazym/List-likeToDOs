import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="app-list list-group">
      {data.map((item) => {
        return (
          <EmployeesListItem
            key={item.id}
            name={item.name}
            salary={item.salary}
            rise={item.rise}
            increase={item.increase}
            onDelete={() => onDelete(item.id)}
            onToggleProp={(e) =>
              onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))
            }
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
