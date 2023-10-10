type IconProps = {
  icon: string;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  width: string;
};

const Icon = ({
  icon,
  width,
  bottom = 0,
  left = 0,
  right = 0,
  top = 0,
}: IconProps) => {
  return (
    <img
      src={icon}
      alt="icon"
      width={width}
      className={`absolute   animate-bounce-less left-[${left}%] right-[${right}%] top-[${top}%] bottom-[${bottom}%]`}
    />
  );
};

export default Icon;
