import FormContact from "@/containers/form-contact/FormContact";

export default function ContactSection() {
  return (
    <section id="about" className={sectionStyle}>
      <FormContact />
    </section>
  );
}

const articleStyle = "flex flex-1 flex-col place-items-center gap-5";

const sectionStyle = `${articleStyle} h-screen p-10 bg-[#465952] text-white max-md:h-screen`;
