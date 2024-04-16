type prop = {
  type: string;
  name: string;
  value: number | string;
  placeholder: string;
  required?: boolean;
  onChange: any;
};

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

export const FormField = (props: prop) => {
  const allprops =
    props.type === "date" ? { min: getDate(), ...props } : { ...props };

  return (
    <input
      {...allprops}
      className="border-b-2 border-solid border-white border-opacity-40 placeholder:text-white focus:border-opacity-100 lowercase"
    />
  );
};

export const FormSubmitButton = () => {
  return (
    <button
      type="submit"
      className="w-full bg-mint h-[50px] hover:bg-transparent hover:border-2 border-mint"
    >
      submit
    </button>
  );
};
