import type {Filter} from "../types/Todo.ts";
import {useTodoState} from "../hooks/useTodoState.ts";

const filterArray: Filter[] = ['ALL', 'ACTIVE', 'COMPLETED'];

export default function FilterTabs() {
    const { filter, changeFilter } = useTodoState();
    return (
        <>
            <div className="flex justify-center">
                {
                    filterArray.map((item) => {
                        return (
                            <button className={filter == item ? "text-blue" : "text-black"}
                                    key={item}
                                    onClick={() => changeFilter(item)}
                            >
                                {item}
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}