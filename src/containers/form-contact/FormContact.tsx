import SubmitButton from "@/components/buttons/SubmitButton";
import Input from "@/components/input/Input";
import TextArea from "@/components/input/Textarea";
import Label from "@/components/label/Label";
import Description from "@/components/typography/Description";
import language from "@/translation/fr/fr";
import { useEffect, useState } from "react";
import { sendEmail } from "@/utils/sendMail";
import Popup from "@/components/pop-up/Popup";

interface InputUser {
  name?: string;
  mail?: string;
  message?: string;
}

interface MessageError {
  id: string;
  text: string;
}

export default function FormContact() {
  const [userName, setUserName] = useState<InputUser>();
  const [userMail, setUserMail] = useState<InputUser>();
  const [userMessage, setUserMessage] = useState<InputUser>();
  const [messageError, setMessageError] = useState<MessageError>();
  const [popupMessage, setPopupMessage] = useState<any>("");

  useEffect(() => {
    renderMessageError(messageError);
  }, [messageError]);

  useEffect(() => {
    setTimeout(() => {
      renderPopup(popupMessage);
      setPopupMessage("");
    }, 2000);
  }, [popupMessage]);

  async function onSubmit(e: any) {
    e.preventDefault();
    let formData;
    const isValidMail = checkMailUserInput(userMail);

    if (!userMessage || userMessage.message === "") {
      setMessageError({ id: "message", text: "Manque votre message" });
    }
    if (!userName || userName.name === "") {
      setMessageError({ id: "name", text: "Manque votre nom" });
    }
    if (!isValidMail) {
      setMessageError({ id: "mail", text: "Mail incorrect" });
    }

    if (isValidMail && userName && userMessage) {
      formData = { ...userName, ...userMail, ...userMessage };
      const resultMessage = await sendEmail(formData);
      setPopupMessage(resultMessage);
      const inputName = document.getElementById(
        "input-name"
      ) as HTMLInputElement;
      const inputMail = document.getElementById(
        "input-mail"
      ) as HTMLInputElement;
      const inputMessage = document.getElementById(
        "input-message"
      ) as HTMLInputElement;

      if (inputName) {
        inputName.value = "";
        setUserName({ name: "" });
      }
      if (inputMail) {
        inputMail.value = "";
        setUserMail({ mail: "" });
      }
      if (inputMessage) {
        inputMessage.value = "";
        setUserMessage({ message: "" });
      }
      setMessageError({ id: "", text: "" });
    }
  }

  function renderPopup(popupMessage: string) {
    return <Popup variant={"yellowgreen"} content={popupMessage} />;
  }

  function renderMessageError(messageError: any) {
    return messageError ? (
      <Label id={"message-error"} color={"red"} content={messageError.text} />
    ) : null;
  }

  function checkMailUserInput(userMail: any) {
    if (userMail && userMail.mail !== "") {
      return userMail?.mail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
    } else {
      return false;
    }
  }

  function getInputUser(e: any) {
    const inputUser = e.target.value;
    const idInputUser = e.target.id;
    switch (idInputUser) {
      case "input-name":
        setUserName({ name: inputUser });
        break;
      case "input-mail":
        setUserMail({ mail: inputUser });
        break;
      case "input-message":
        setUserMessage({ message: inputUser });
        break;
      default:
        break;
    }
  }
  return (
    <>
      <form
        id="formContact"
        className="flex flex-col gap w-full"
        onSubmit={(e) => onSubmit(e)}
      >
        {popupMessage && renderPopup(popupMessage)}
        <Description content={language?.descriptionContact} />
        <Label id={"label-name"} content={"Nom Prénom"} />
        <Input
          id={"input-name"}
          handleChange={(e) => getInputUser(e)}
          variant={"text"}
        />
        {messageError && messageError.id === "name"
          ? renderMessageError(messageError)
          : null}

        <Label id={"label-mail"} content={"Mail"} />
        <Input
          id={"input-mail"}
          handleChange={(e) => getInputUser(e)}
          variant={"mail"}
        />
        {messageError && messageError.id === "mail"
          ? renderMessageError(messageError)
          : null}

        <Label id={"label-message"} content={"Message"} />
        <TextArea id={"input-message"} handleChange={(e) => getInputUser(e)} />
        {messageError && messageError.id === "message"
          ? renderMessageError(messageError)
          : null}

        <SubmitButton
          id={"submit-form"}
          label={"Envoyer"}
          handleSubmit={(e: any) => onSubmit(e)}
        />
      </form>
    </>
  );
}
