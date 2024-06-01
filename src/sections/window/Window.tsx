import NavigatorHeader from "@/containers/header/NavigatorHeader";

export default function Window() {
  return (
    <>
      <section className="w-1/2 h-1/2 bg-white my-3 m-auto rounded-lg">
        <NavigatorHeader />
        <div>
          <aside>TEST</aside>
          <div></div>
        </div>
      </section>
    </>
  );
}
