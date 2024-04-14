import { useState } from "react";
import Form from "../../Components/Form";
import Input from "../../Components/Input";
import { FORM_INPUTS } from "../../constants/constants";
import { useTasksStorage } from "../../services/TasksStorage";
import { calculateTaskRemainingTime } from "../../utils/utils";

export default function RegisterTaskForm({onCloseClick}) {
  const { tasks, appendTask } = useTasksStorage(true);
  const [errMsg, setErrorMsg] = useState("");
  function onFormSubmit(e) {
    const formData = new FormData(e.target);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    };

    if (data.name) {
      if (new Date(data.start) > new Date(data.end)) {
        setErrorMsg("Task Start Date Can't Be Late Than DeadLine Date");
      }else if(tasks.filter(el => el.name === data.name).length){
        setErrorMsg("Duplicated Tasks Are Not Allowed");
      } else {
        data.workedHours = 0;
        data.progress = 0;
        data.status = calculateTaskRemainingTime(data.start, data.end);
        data.completionDate = '---'
        data.isCompleted = false;
        appendTask(data);
        e.target.reset();
        setErrorMsg('');
      }
    }
  }

  return (
    <div className="w-50 m-auto border rounded-1 tasks-form">
      <Form submitHnadler={onFormSubmit} errMsg={errMsg}>
      <button onClick={onCloseClick} className="btn btn-danger w-25 ms-auto">X</button>
        <h2 className="text-center t">Register Task</h2>
        {FORM_INPUTS.map((el) => (
          <Input
            key={el.id}
            id={el.id}
            isRequired={el.isRequired}
            label={el.label}
            type={el.type}
          />
        ))}
      </Form>
    </div>
  );
}
