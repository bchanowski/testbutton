import "./NewButton.css";

type Props = {
  onClick: () => void;
};

const NewButton = ({ onClick }: Props) => {
  return <button onClick={onClick}>klik klik</button>;
};

export default NewButton;
