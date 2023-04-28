import { IEmployee } from "./Employee.type";
import "./EmployeeModal.style.css";

type Props = {
  onClose: () => void;
  data: IEmployee;
};

const EmployeeModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Employee Data</h3>
        <div>
          <div>
            <label>First Name : {data.Name}</label>
          </div>
          <div>
            <label>Salary: {data.Salary}</label>
          </div>
          <div>
            <label>DOB. : {data.DOB}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;