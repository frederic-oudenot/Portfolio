interface SessionProp {
  handleClick: () => void;
}

export default function Session({ handleClick }: SessionProp) {
  return (
    <section
      className="absolute flex-col w-full h-full justify-center z-10 "
      id="session"
    >
      <div className="h-56 w-56 bg-lime-50 rounded-full"></div>
      <h1>Bienvenue sur mon portfolio</h1>
      <button onClick={handleClick}>Connectez-vous !</button>
    </section>
  );
}
