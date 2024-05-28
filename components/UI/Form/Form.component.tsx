"use client";

import s from "./Form.component.module.scss";
import Image from "next/image";
import arrowIcon from "@/assets/arrow.png";
import { useRef, useState } from "react";

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
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.form__inp}
          type="text"
          name="email"
          ref={inp}
          placeholder="Twój email"
        />
        <button className={s.form__btn} type="submit" disabled={isPending}>
          <Image src={arrowIcon} alt="arrow icon" width={25} height={25} />
        </button>
      </form>
      {isPending ? <p className={s.form__sending}>Wysyłanie...</p> : null}
      {success ? <p className={s.form__success}>{success}</p> : null}
      {error ? <p className={s.form__error}>{error}</p> : null}
    </>
  );
}

export default Form;
