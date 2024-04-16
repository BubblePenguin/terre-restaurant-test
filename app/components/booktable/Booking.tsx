"use client";
import { montez, lora } from "../fonts";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  number: z.number(),
  date: z.date(),
});

//function for todays date in yyyy-mm-dd format
function getDate() {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export default () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  async function onSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Capture the error message to display to the user
      setError("");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      id="booking"
      className="w-full bg-[url(/book-bg.jpg)] py-[100px] px-[500px] h-[500px] text-white flex flex-col item-center justify-center text-center"
    >
      <span className={`${montez.className} text-[20px]`}>book a table</span>
      <h2 className={`${lora.className} text-[60px]`}>book a table</h2>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-[35px] justify-between"
      >
        <input
          type="text"
          className="border-b-2 border-solid border-white border-opacity-40 placeholder:text-white focus:border-opacity-100"
          placeholder="name"
          name="name"
          required
        />
        <input
          type="tel"
          className="border-b-2 border-solid border-white border-opacity-40 placeholder:text-white  focus:border-opacity-100"
          placeholder="your phone number"
          name="number"
          required
        />

        <input
          type="date"
          className="border-b-2 border-solid border-white border-opacity-40 focus:placeholder:text-white color-white  focus:border-opacity-100"
          placeholder="date"
          min={getDate()}
          name="date"
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
