import { Label, Style, Prop } from "./style";
type Props = {
  label: string;
  style: {
    color: string;
    padding: string;
    width: string;
    backgroundColor?: string;
  };
};
const Child = ({ style, label }: Props) => {
  const { color, padding, width, backgroundColor = "pink" } = style;
  const styleText = {
    color,
    padding,
    width,
    backgroundColor,
  };
  return (
    <div>
      <div style={styleText}> {label}</div>
    </div>
  );
};

export default Child;
