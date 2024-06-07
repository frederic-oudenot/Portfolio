import FormContact from "@/containers/form-contact/FormContact";

export default function ContactSection() {
  return (
    <section id="about" className={sectionStyle}>
      <FormContact />
    </section>
  );
}

const articleStyle = "flex flex-col place-items-center  gap-5";

const sectionStyle = `${articleStyle}  p-10 bg-[#465952] text-white`;
