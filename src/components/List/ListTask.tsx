import { Trash } from "@phosphor-icons/react";
import { ITask } from "../NewTask";

interface ListTaskProps {
  removeTask: (id: number) => void;
  // tasks: ITask[];
  data: ITask;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function ListTask({
  removeTask,

  data,
  toggleTaskStatus,
}: ListTaskProps) {
  function handleToggleTaskStatus() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  return (
    <div className="mt-4">
      <div
        key={data.id}
        className="bg-grey-500 p-4 flex items-center justify-between rounded-md"
      >
        <div className="flex items-center">
          <input
            checked={data.isChecked}
            onChange={handleToggleTaskStatus}
            type="checkbox"
            value=""
            className="w-[1.063rem] h-[1.063rem] bg-grey-500 text-purple-dark rounded-full border-2 border-blue-regular focus:ring-blue-regula dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <span
            className={` ${
              data.isChecked
                ? "text-grey-300 line-through ml-5"
                : "text-grey-100 ml-5"
            }`}
          >
            {data.text}
          </span>
        </div>
        <div>
          <button
            className="text-grey-300 ml-5 "
            onClick={() => removeTask(data.id)}
          >
            <Trash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
