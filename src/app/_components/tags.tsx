export default function Tags({ tag }: { tag: string }) {
  return (
    <p className="m-1 rounded-md bg-slate-200 px-1 text-sm dark:bg-slate-600">
      {tag}
    </p>
  );
}
