export default function ContainerTopBorder({children}: {children: React.ReactNode}){
  return (
    <div className="border-t border-t-black dark:border-t-gray-50">
      {children}
    </div>
  );
}