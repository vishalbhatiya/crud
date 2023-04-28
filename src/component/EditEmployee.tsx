import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [Name, setName] = useState(data.Name);
  const [Salary, setSalary] = useState(data.Salary);
  const [DOB, setDOB] = useState(data.DOB);

  const onNameChangeHnd = (e: any) => {
    setName(e.target.value);
  };

  const onSalaryChangeHnd = (e: any) => {
    setSalary(e.target.value);
  };

  const onDOBChangeHnd = (e: any) => {
    setDOB(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      Name: Name,
      Salary: Salary,
      DOB: DOB,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label> Name : </label>
          <input type="text"value={Name} onChange={onNameChangeHnd} maxLength={10}/>
        </div>
        <div>
          <label>Salary : </label>
          <input type= "number"  value={Salary} onChange={onSalaryChangeHnd}  min={0} max={50000}/>
        </div>
        <div>
          <label>DOB : </label>
          <input type="date" value={DOB} onChange={onDOBChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Update Employee" />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;