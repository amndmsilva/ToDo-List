import { ClipboardText } from "@phosphor-icons/react";

export function Empty() {
  return (
    <div className="mt-8">
      <div className="bg-grey-500 h-[0.125rem] mb-20"></div>
      <div className="flex flex-col items-center justify-center text-grey-300">
        <ClipboardText size={64} weight="light" />
        <span className="font-bold mt-3">
          Você ainda não tem tarefas cadastradas
        </span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
