import { TABEL_HEAD } from "../constants/constants"
import { useTasksStorage } from '../services/TasksStorage'
import { calculateTaskRemainingTime, calculateTaskProgress } from "../utils/utils";

export default function Table({onEdit,onDelete}){
    const { tasks } = useTasksStorage(true);
    const colors = {
        'Overdue': 'red',
        'Urgent': 'orange',
        'Moderate': 'yellow',
        'On Track': 'green'
    }

    return(
        <table className="table table-striped table-hover container mt-3 text-center">
            <thead>
                <tr className="">
                {TABEL_HEAD.map(el => <th key={el.id}>{el.name}</th>)}
                </tr>
            </thead>

            <tbody>
                {tasks.map((el,index) => {
                    el.status = el.isCompleted? el.status : calculateTaskRemainingTime(el.start,el.end);
                    el.progress = el.isCompleted? el.progress : calculateTaskProgress(el.totalH,el.workedHours)
                    return (
                        <tr key={el.name}>
                            <td>{index+1}</td>
                            <td>{el.name}</td>
                            <td>{el.start}</td>
                            <td>{el.end}</td>
                            <td>{el.totalH}</td>
                            <td>{el.workedHours}</td>
                            <td>{el.completionDate}</td>
                            <td><input className="" type="range" value={el.progress} title={el.progress +"%"} /></td>
                            <td style={{background:colors[el.status],color:'white'}}>{el.status}</td>
                            <td className="d-flex gap-1 justify-content-center">
                                <button disabled={el.isCompleted}  onClick={onEdit} className="btn btn-info" value={el.name}><i style={{pointerEvents:'none'}} className="fas fa-pencil-alt"></i></button>
                                <button onClick={onDelete} className="btn btn-danger" value={el.name}><i style={{pointerEvents:'none'}} className="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}