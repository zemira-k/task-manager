import { useState } from "react"
import { TaskTable } from "../cmps/TaskTable"
import { taskService } from "../services/taskService"

export const Task = () => {
  const [tasks, setTasks] = useState(taskService.query())
  if (!tasks) return <div>loading..</div>
  return (
    <section className="task-page main-page pad-1">
      <section className="actions">
      </section>
      <TaskTable tasks={tasks} />
    </section>
  )
}
