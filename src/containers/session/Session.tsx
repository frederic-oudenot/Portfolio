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
      <div className="bg-lime-50 rounded-full m-auto text-center">
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
