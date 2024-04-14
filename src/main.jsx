
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TasksStorage from './services/TasksStorage'

ReactDOM.createRoot(document.getElementById('root')).render(

    <TasksStorage>
       <App />
    </TasksStorage>
  
)
