import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

interface NewTaskProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function NewTask({ tasks, setTasks }: NewTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask() {
    if (!newTask.trim()) {
      return;
    }

    setTasks([...tasks, { id: Date.now(), text: newTask, isChecked: false }]);
    setNewTask("");
  }

  return (
    <div className="flex -mt-7 justify-center">
      <input
        type="text"
        className="bg-grey-500 mr-1 w-[39.875rem] h-[3.375rem] p-3 rounded-md text-grey-100 border-none"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        placeholder="Adicione uma nova tarefa"
      />
      <button className="text-grey-100 bg-blue-dark rounded-md p-3 font-bold transition duration-200 hover:bg-blue-regular text-sm w-[5.625rem] h-[3.375rem]">
        <div className="flex items-center justify-center">
          <span className="mr-1">Criar</span>{" "}
          <PlusCircle size={20} onClick={handleCreateNewTask} />
        </div>
      </button>
    </div>
  );
}
