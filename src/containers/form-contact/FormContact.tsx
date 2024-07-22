import SubmitButton from "@/components/buttons/SubmitButton";
import Input from "@/components/input/Input";
import TextArea from "@/components/input/Textarea";
import Label from "@/components/label/Label";
import Description from "@/components/typography/Description";
import { useEffect, useState } from "react";
import { sendEmail } from "@/utils/sendMail";
import Popup from "@/components/pop-up/Popup";
import { useAppSelector } from "@/hooks/Redux";

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
  const userLanguage = useAppSelector(
    (state) => state.languages.initialLanguage
  );
  const [userName, setUserName] = useState<InputUser>();
  const [userMail, setUserMail] = useState<InputUser>();
  const [userMessage, setUserMessage] = useState<InputUser>();
  const [messageError, setMessageError] = useState<MessageError>();
  const [popupMessage, setPopupMessage] = useState<any>("");

  // Rendering error message if missing data
  useEffect(() => {
    renderMessageError(messageError);
  }, [messageError]);

  // Rendering a short pop-up message, indication to sending a message
  useEffect(() => {
    setTimeout(() => {
      renderPopup(popupMessage);
      setPopupMessage("");
    }, 2000);
  }, [popupMessage]);

  // Function Submit a message
  async function onSubmit(e: any) {
    e.preventDefault();
    // init variable data
    let formData;
    // Checking if format mail is validated
    const isValidMail = checkMailUserInput(userMail);

    // Checking if message is existed
    if (!userMessage || userMessage.message === "") {
      setMessageError({
        id: "message",
        text: userLanguage?.genericContent.errorMessage,
      });
    }
    // Checking if username is existed
    if (!userName || userName.name === "") {
      setMessageError({
        id: "name",
        text: userLanguage?.genericContent.errorName,
      });
    }
    // Checking if mail is existed
    if (!isValidMail) {
      setMessageError({
        id: "mail",
        text: userLanguage?.genericContent.errorMail,
      });
    }
    // Checking if all are existed
    if (isValidMail && userName && userMessage) {
      // Include all data
      formData = { ...userName, ...userMail, ...userMessage };
      // Sending to our function to send a mail
      const resultMessage = await sendEmail(formData);
      // Display a pop-up message
      setPopupMessage(resultMessage);

      // Selected all inputs to reset all data
      const inputName = document.getElementById(
        "input-name"
      ) as HTMLInputElement;
      const inputMail = document.getElementById(
        "input-mail"
      ) as HTMLInputElement;
      const inputMessage = document.getElementById(
        "input-message"
      ) as HTMLInputElement;

      // Cleaning inputName
      if (inputName) {
        inputName.value = "";
        setUserName({ name: "" });
      }

      // Cleaning inputMail
      if (inputMail) {
        inputMail.value = "";
        setUserMail({ mail: "" });
      }

      // Cleaning inputMessage
      if (inputMessage) {
        inputMessage.value = "";
        setUserMessage({ message: "" });
      }

      // Cleaning inputMessageError
      setMessageError({ id: "", text: "" });
    }
  }

  // Rendering a pop-up message
  function renderPopup(popupMessage: string) {
    return <Popup variant={"yellowgreen"} content={popupMessage} />;
  }

  // Rendering a message Error into form
  function renderMessageError(messageError: any) {
    return messageError ? (
      <Label id={"message-error"} color={"red"} content={messageError.text} />
    ) : null;
  }

  // Function : Checking mail according regex
  function checkMailUserInput(userMail: any) {
    if (userMail && userMail.mail !== "") {
      return userMail?.mail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
    } else {
      return false;
    }
  }

  // Function getting all data from user if any change into inputs
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
        <Description content={userLanguage?.ContactPage.descriptionContact} />
        <Label
          id={"label-name"}
          content={userLanguage?.genericContent.placeholderName}
        />
        <Input
          id={"input-name"}
          handleChange={(e) => getInputUser(e)}
          variant={"text"}
        />
        {messageError && messageError.id === "name"
          ? renderMessageError(messageError)
          : null}

        <Label
          id={"label-mail"}
          content={userLanguage?.genericContent.titleMail}
        />
        <Input
          id={"input-mail"}
          handleChange={(e) => getInputUser(e)}
          variant={"mail"}
        />
        {messageError && messageError.id === "mail"
          ? renderMessageError(messageError)
          : null}

        <Label
          id={"label-message"}
          content={userLanguage?.genericContent.placeholderMessage}
        />
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
