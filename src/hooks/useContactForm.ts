import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FormInputs } from "@/templates";

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    mode: "onTouched",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs
      .send(
        serviceID,
        templateID,
        data as unknown as Record<string, unknown>,
        userID
      )
      .then(() => {
        setSuccessMessage(
          "Mensaje enviado con éxito. Te contactaremos pronto."
        );
        setErrorMessage("");
        reset();
      })
      .catch(() => {
        setErrorMessage(
          "Error al enviar el mensaje. Inténtalo de nuevo más tarde."
        );
      });
  };

  return {
    register,
    handleSubmit,
    errors,
    successMessage,
    errorMessage,
    onSubmit,
  };
};
