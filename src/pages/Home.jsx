import RegisterTaskForm from '../pages/RegisterTaskForm/RegisterTaskForm';
import Table from '../Components/Table';
import Modal from '../Components/modal/Modal';
import { useState } from 'react';
import { useTasksStorage } from '../services/TasksStorage';
import TaskUpdate from './TaskUpdate';


export default function Home(){
    const {deleteTask,clearTasks} = useTasksStorage(true);
    const [toBeDeletedTask, setToBeDeletedTask] = useState('');
    const [isTaskFormOpen,setIsTaskFormOpen] = useState(false);
    const [isUpdateFormOpen,setIsUpdateFormOpen] = useState(false);
    const [isDeleteModalOpen,setIsDeleteModalOpen] = useState(false);

    function onDeleteConfirm(){
        if(toBeDeletedTask === 'All Tasks'){
            clearTasks();
            onCancelDelete();
        }else{
            deleteTask(toBeDeletedTask);
            onCancelDelete();
        }
        
    };

    function onCancelDelete(){
        setToBeDeletedTask('');
        setIsDeleteModalOpen(false);
    };

    function onTaskEditClick(e){
        setToBeDeletedTask(e.target.value);
        setIsUpdateFormOpen(true)
    };

    function onUpdateConfirm(){
        setIsUpdateFormOpen(false)
    }

    function onTaskDeleteClick(e){
        setToBeDeletedTask(e.target.value);
        setIsDeleteModalOpen(true);
    };

    function onClearAllClick(){
        setToBeDeletedTask('All Tasks');
        setIsDeleteModalOpen(true);
    };



    return(
        <div className='position-relative'>  
            <div className='container mt-5'>
                {isTaskFormOpen && (<div className='task-form-cont'>
                    <RegisterTaskForm onCloseClick={()=>setIsTaskFormOpen(false)}/>
                </div>) || null}
            <div>
                <button onClick={()=>setIsTaskFormOpen(true)} className='btn btn-primary py-3 me-2'> Add Task<i className="fas fa-plus mx-2"></i></button>
                <button onClick={onClearAllClick} className='btn btn-danger py-3'>Clear All Tasks <i className="fas fa-trash mx-2"></i></button>
            </div>
            <div>
                <Table onDelete={onTaskDeleteClick} onEdit={onTaskEditClick}/>
            </div>
            </div>
            {isDeleteModalOpen && <Modal onCancel={onCancelDelete} onConfirm={onDeleteConfirm} text={toBeDeletedTask}/> || null}
            {isUpdateFormOpen && <TaskUpdate taskName={toBeDeletedTask}  onUpdateSubmit={onUpdateConfirm}/> || null}
        </div>
    )
}