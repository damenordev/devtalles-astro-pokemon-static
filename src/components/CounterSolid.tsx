import { createSignal, type Component, type JSX } from 'solid-js'

export interface ICounterSolidProps {
  children?: JSX.Element
  initialValue?: number
}

export const CounterSolid: Component<ICounterSolidProps> = props => {
  const [count, setCount] = createSignal(props.initialValue || 0)

  return (
    <div class="container mx-auto space-y-4">
      {props.children}
      <div class="flex items-end justify-center gap-8">
        <button
          class="text-2xl text-neutral-950 font-bold bg-indigo-400 px-3.5 pb-1.5 rounded-lg "
          onClick={() => setCount(prevState => --prevState)}
        >
          -
        </button>
        <h3 class="text-6xl">{count()}</h3>
        <button
          class="text-2xl text-neutral-950 font-bold bg-indigo-400 px-3 pb-1.5 rounded-lg cursor-pointer"
          onClick={() => setCount(prevState => ++prevState)}
        >
          +
        </button>
      </div>
    </div>
  )
}
