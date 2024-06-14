import { create } from "zustand";
import { devtools,persist } from "zustand/middleware";

const counterStore = ((set) => ({
    count : 0,
    increaseCount : () => set((state) => ({count : state.count + 1})),
    resetCount : () => set((state) => ({count:0})),
    decreaseCount : () => set((state) => ({count: state.count - 1}))
}));

const useCounterStore = create(
    devtools(
        persist(counterStore,{name:"counter"})
    )
)

export default useCounterStore;