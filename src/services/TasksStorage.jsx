import { createContext, useContext, useState, useEffect } from "react";
import { sortTasksBasedOnStartTime } from "../utils/utils";
const storage = createContext([]);
export default function TasksStorage({ children }) {
  const [tasks, setTasks] = useState([]);
  return (
    <storage.Provider value={[tasks, setTasks]}>{children}</storage.Provider>
  );
}

export function useTasksStorage(reFetch) {
  const [tasks, setTasks] = useContext(storage);

  useEffect(() => {
    syncData();
  }, [reFetch]);

  function syncData() {
    let localStorageData = JSON.parse(localStorage.getItem("tasks")) || [];
    if(localStorageData.lenght){
        localStorageData = sortTasksBasedOnStartTime(localStorageData) ;
    }
    setTasks(localStorageData);
  };

  function appendTask(item) {
    setTasks((prev) => {
      const UpdatedList = sortTasksBasedOnStartTime([...prev, item]);
      insertToLocalStorge(UpdatedList)
      return UpdatedList;
    });
  };

  function updateTask(taskName,workingHours,isCompleted = false) {
    setTasks((prev) => {
      const currentTask = prev.find((el) => el.name === taskName)
      currentTask.workedHours = ((+currentTask.workedHours) + (+workingHours)) || currentTask.workedHours;
      if(isCompleted){
        currentTask.isCompleted = true;
        currentTask.completionDate = new Date().toISOString().split('T')[0]
      }
      const filterdList = prev.filter((el) => el.name !== taskName);
      const UpdatedList = sortTasksBasedOnStartTime([...filterdList, currentTask]);
      prev = UpdatedList
      insertToLocalStorge(UpdatedList);
      return prev;
    });
  };

  function deleteTask(taskName = "") {
    setTasks((prev) => {
      const UpdatedList = sortTasksBasedOnStartTime(prev.filter((el) => el.name !== taskName));
      insertToLocalStorge(UpdatedList);
      return UpdatedList;
    });
  };

  function clearTasks() {
    setTasks((prev) => {
      localStorage.removeItem("tasks");
      prev = []
      return prev;
    });
  };

  function insertToLocalStorge(list = []) {
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(list));
  };

  return { tasks, appendTask, deleteTask, clearTasks, updateTask };
}
