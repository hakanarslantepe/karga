import Image from "next/image";
import Form from "@/components/Form";
import layer from "@/assets/layer.png";
import plus from "@/assets/plus.png";
import circle from "@/assets/circle.png";
import Task from "./Task";

const Board = ({ board, openForm, closeForm, openForms, setOpenForms }) => {
  return (
    <div className="w-[309px] h-[70vh] bg-white mr-2 rounded-lg overflow-y-auto">
      <div className="p-4 border-b-2 border-slate-200 flex justify-between">
        <h1 className="uppercase text-blue-500 font-semibold">{board?.name}</h1>
        <div className="flex gap-x-2">
          <button onClick={() => openForm(board.id)}>
            <Image src={plus} alt="plus" width={24} height={24} />
          </button>
          <button onClick={() => closeForm(board.id)}>
            <Image src={circle} alt="circle" width={24} height={24} />
          </button>
        </div>
      </div>
      {openForms[board.id] && (
        <Form
          setOpenForms={setOpenForms}
          boardId={board.id}
          closeForm={closeForm}
        />
      )}

      <div className="container">
        <div>
          {board?.tasks.length === 0 ? (
            <div className="flex flex-col justify-center items-center">
              <Image
                className="mt-44"
                src={layer}
                alt="layer"
                width={185}
                height={159}
              />
            </div>
          ) : (
            board?.tasks.map((task) => <Task key={task.id} task={task} />)
          )}
        </div>

        <button
          onClick={() => openForm(board.id)}
          className="text-xl font-semibold text-slate-500 ml-24"
        >
          + New Task
        </button>
      </div>
    </div>
  );
};

export default Board;
