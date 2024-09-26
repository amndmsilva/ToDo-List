interface HeaderListProps {
  tasksCounter: number;
  checkedTasksCounter: number;
}

export function HeaderList({
  tasksCounter,
  checkedTasksCounter,
}: HeaderListProps) {
  return (
    <div>
      <header className="flex justify-between items-center text-sm">
        <div className="flex">
          <span className="text-blue-regular font-bold mr-3">
            Tarefas criadas
          </span>
          <div className="bg-grey-400 text-grey-200 rounded-full py-[0.125rem] px-2">
            <span>{tasksCounter}</span>
          </div>
        </div>
        <div className="flex">
          <span className="text-purple-regular font-bold mr-3">Concluídas</span>
          <div className="bg-grey-400 text-grey-200 rounded-2xl py-[0.125rem] px-2">
            <span>
              {tasksCounter === 0
                ? tasksCounter
                : `${checkedTasksCounter} de ${tasksCounter}`}
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
