import Avatar from "@/components/avatar/Avatar";
import Title from "@/components/typography/Title";

interface SessionProp {
  handleClick: () => void;
}

export default function Session({ handleClick }: SessionProp) {
  return (
    <section
      className="absolute w-full h-screen place-content-center z-10"
      id="session"
    >
      <div className="flex flex-col w-full place-items-center m-auto text-center gap-2">
        <Avatar />
        <Title
          id={"welcome-session"}
          content={"Bienvenue sur le portfolio de Frédéric OUDENOT"}
        />
        <button className="font-bold hover:text-red-700" onClick={handleClick}>
          Connectez-vous !
        </button>
      </div>
    </section>
  );
}
