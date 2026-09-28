export function IndustryPainPoints({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="border-l-2 border-slate-300 pl-4 text-base leading-relaxed text-slate-700"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
