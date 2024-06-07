import MainButton from "../../components/buttons/MainButton";

export default function Descritpion() {
  return (
    <>
      <section
        id="description"
        className="w-dvw bg-gradient-to-r from-purple-500 to-pink-500 h-[32rem]"
      >
        <article className="flex flex-col p-10 items-start justify-around h-full">
          <h1>
            Bonjour, moi c'est <strong>Frédéric OUDENOT</strong>
            <br />
            Je suis un développeur Full-stack Javascript
          </h1>
          <MainButton label="Contact me" id={"hello"} />
        </article>
      </section>
    </>
  );
}
