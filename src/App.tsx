import { useState } from "react";
import { Header } from "./components/Header";
import { Empty } from "./components/List/Empty";
import { HeaderList } from "./components/List/HeaderList";
import { ListTask } from "./components/List/ListTask";
import { ITask, NewTask } from "./components/NewTask";
import "./styles/global.css";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: value } : task
    );

    setTasks(updatedTasks);
  }

  return (
    <div className="bg-grey-600 h-screen flex flex-col">
      <Header />
      <NewTask setTasks={setTasks} tasks={tasks} />
      <section className="mt-20 text-grey-100 max-w-[46rem] w-full my-0 mx-auto">
        <HeaderList
          tasksCounter={tasks.length}
          checkedTasksCounter={checkedTasksCounter}
        />
        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => (
              <ListTask
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
              />
            ))}
          </div>
        ) : (
          <Empty />
        )}
      </section>
    </div>
  );
}

export default App;
