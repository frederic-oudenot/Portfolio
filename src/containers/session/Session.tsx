interface SessionProp {
  handleClick: () => void;
}

export default function Session({ handleClick }: SessionProp) {
  return (
    <section
      className="absolute flex-col w-full h-screen flex-col gap-16 justify-center content-center z-10"
      id="session"
    >
      <div className="h-56 w-56 bg-lime-50 rounded-full m-auto text-center">
        <img className="rounded-full" src="/deadpool.jpg"></img>

        <h1 id={"welcome-session"}>Bienvenue sur mon portfolio</h1>
        <button className="font-bold hover:text-red-700" onClick={handleClick}>
          Connectez-vous !
        </button>
      </div>
    </section>
  );
}
