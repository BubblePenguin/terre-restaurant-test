"use client";
import { GoogleTagManager } from "@next/third-parties/google";
import { montez, lora } from "../fonts";
import { useState } from "react";
import { z } from "zod";
import { FormField, FormSubmitButton } from "./FormField";
import Notiflix from "notiflix";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  number: z
    .string()
    .min(10, { message: "Must be a valid mobile number" })
    .max(14, { message: "Must be a valid mobile number" }),
  date: z.string().transform((str) => new Date(str)),
});

type FormData = {
  name: string;
  number: string;
  date: string;
};

export default () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    number: "",
    date: "",
  });

  async function onChange(e: any) {
    setForm((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  }

  async function onSubmit(event: any) {
    event.preventDefault();

    try {
      const res = schema.parse(form);

      Notiflix.Notify.success("Manager wil contact you as soon as possible");
      setForm({ name: "", number: "", date: "" });
    } catch (error: any) {
      const { message } = error;

      JSON.parse(message).map((m: any) => Notiflix.Notify.failure(m.message));
    }
  }

  return (
    <section
      id="booking"
      className="w-full bg-[url(/book-bg.jpg)] py-[100px] px-[500px] h-[500px] text-white flex flex-col item-center justify-center text-center"
    >
      <span className={`${montez.className} text-[20px]`}>book a table</span>
      <h2 className={`${lora.className} text-[60px]`}>book a table</h2>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-[35px] justify-between"
      >
        <FormField
          type="text"
          placeholder="name"
          name="name"
          required={true}
          value={form.name}
          onChange={onChange}
        />
        <FormField
          type="number"
          placeholder="your phone number"
          name="number"
          required={true}
          value={form.number}
          onChange={onChange}
        />

        <FormField
          type="date"
          placeholder="date"
          name="date"
          required={true}
          value={form.date}
          onChange={onChange}
        />
        <FormSubmitButton />
        <GoogleTagManager gtmId="GTM-T8LWJZVD" />
      </form>
    </section>
  );
};
