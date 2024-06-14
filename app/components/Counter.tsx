export type CounterProps = {
  items: {
    name: string;
    count: number;
  }[]
}

function formatNumberLocale(num: number) {
  return num.toLocaleString('en-US');
}

export default function Counter({ items }: CounterProps) {
  return (
      <div className="mt-24 py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-transparent">
              <h2 className="text-5xl font-bold">{formatNumberLocale(item.count)}</h2>
              <p className="text-zinc-400">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
  )
}