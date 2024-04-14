import Form from "../Components/Form";
import Input from "../Components/Input";
import { useTasksStorage } from "../services/TasksStorage";

export default function TaskUpdate({ taskName, onUpdateSubmit }) {
  const { updateTask } = useTasksStorage(true);

  function onSubmit(e) {
    updateTask(taskName, e.target[1].value,e.target[2].value === 'completed');
    onUpdateSubmit();
  }
  return (
    <div className="position-fixed top-0 bottom-0 end-0 start-0 bg-opacity-25 d-flex align-items-center bg-dark">
      <div className="w-50 mx-auto p-5 ">
        <Form submitHnadler={onSubmit}>
          <div className="text-end">
            <button className="btn btn-danger" onClick={onUpdateSubmit}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <Input
            label={"Hours Of Work for " + taskName}
            type="number"
            id="hours"
            isRequired={true}
          />
          <select className="form-control mt-1" required name="prog" id="">
            <option selected disabled value="">--Please Select an Option--</option>
            <option value="completed">Completed</option>
            <option value="onGoing">On Going</option>
          </select>
        </Form>
      </div>
    </div>
  );
}
