export default function ContainerTopBorder({children}: {children: React.ReactNode}){
  return (
    <div className="border-t-black border-t">
      {children}
    </div>
  );
}