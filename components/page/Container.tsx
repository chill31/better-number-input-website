export default function Container(props: any) {

  return (
    <main className="flex flex-col justify-start items-start min-h-[650px] h-[100%] w-full gap-4 pl-5 p-menu-top" {...props}>
      {props.children}
    </main>
  )

}