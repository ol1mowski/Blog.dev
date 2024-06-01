"use client";

import { useRef, useState } from "react";
import FormComponent from "./Form.component";

function Form({ action }: { action: (formData: FormData) => Promise<void> }) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const inp = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);

    try {
      await action(formData);
      setSuccess("[+] Zapisano do Newslettera ☺️");
      if (inp.current) {
        inp.current.value = "";
      }
    } catch (err) {
      setError(
        "[-] Zapis do Newslettera zakończył się niepowodzeniem, Sprobuj ponownie poźniej"
      );
    } finally {
      setIsPending(false);
    }
  };

  return (
    <FormComponent
      inp={inp}
      error={error}
      isPending={isPending}
      success={success}
      handleSubmit={handleSubmit}
    />
  );
}

export default Form;
