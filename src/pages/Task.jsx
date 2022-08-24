import { useState } from "react"
import { TaskTable } from "../cmps/TaskTable"
import { taskService } from "../services/taskService"

export const Task = () => {
  const [tasks, setTasks] = useState(taskService.query())

  function onToggleTaskStatus(taskToUpdate) {
    taskService.update(taskToUpdate)
    setTasks(prevTasks => prevTasks.map(task => {
      if (task._id === taskToUpdate._id) return taskToUpdate
      return task
    }))
  }

  if (!tasks) return <div>loading..</div>
  return (
    <section className="task-page main-page pad-1">
      <section className="actions">
      </section>
      <TaskTable tasks={tasks} onToggleTaskStatus={onToggleTaskStatus} />
    </section>
  )
}
