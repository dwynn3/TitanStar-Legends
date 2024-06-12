import "./index.css";

interface RuneProps {
  rune: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onContextMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Rune = ({ rune, isActive, onClick, onContextMenu }: RuneProps) => {
  return (
    <button
      className={"rune " + (isActive ? "rune-active" : "")}
      id={`rune-${rune}`}
      onClick={onClick}
      onContextMenu={onContextMenu}
    />
  );
};

export default Rune;
