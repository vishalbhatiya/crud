import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [Name, setName] = useState("");
  const [Salary, setSalary] = useState(0);
  const [DOB, setDOB] = useState(0);

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onFirstNameChangeHnd = (e: any) => {
    setName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setSalary(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setDOB(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      Name: Name,
      Salary: Salary,
      DOB: DOB,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name : </label>
          <input type="text" value={Name} onChange={onFirstNameChangeHnd} maxLength={10}/>
        </div>
        <div>
          <label>Salary : </label>
          <input type="number" value={Salary} onChange={onLastNameChangeHnd} min={0} max={50000}/>
        </div>
        <div>
          <label>DOB : </label>
          <input type="date" value={DOB} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Add Employee" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;