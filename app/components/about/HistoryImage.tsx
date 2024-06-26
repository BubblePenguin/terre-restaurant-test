import Image from "next/image";
type prop = {
  src: string;
  width: number;
  height: number;
  classes?: string;
};
const HistoryImage = (props: prop) => {
  const { src, width, height, classes } = props;

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt="history image"
      className={`${classes ? classes : ""} absolute object-cover`}
    ></Image>
  );
};

export default HistoryImage;
