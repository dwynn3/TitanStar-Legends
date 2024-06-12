import { useState } from "react";
import "./index.css";
import Rune from "../Rune";
import Points from "../Points";

interface Rune {
  id: string;
  isActive: boolean;
}

type Tree = Rune[][];

interface RuneTreeProps {
  runes: Tree;
  maxPoints: number;
}

const RuneTree = ({ runes, maxPoints }: RuneTreeProps) => {
  const [data, setData] = useState(runes);
  const [points, setPoints] = useState(0);

  const onRuneClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    branchIdx: number,
    runeIdx: number
  ) => {
    e.preventDefault();

    const isRightClick = e.type === "contextmenu";
    const currRune = data[branchIdx][runeIdx];
    const parentRune = data[branchIdx][runeIdx - 1];
    const childRune = data[branchIdx][runeIdx + 1];

    const updateData = () => {
      const newState = [...data];
      newState[branchIdx][runeIdx].isActive =
        !newState[branchIdx][runeIdx].isActive;

      setData(newState);
    };

    if (isRightClick) {
      if (points > maxPoints) return;

      if (
        currRune?.isActive &&
        (!childRune?.isActive || childRune === undefined)
      ) {
        setPoints((prevState) => prevState - 1);
        updateData();
      }
    } else {
      if (points >= maxPoints) return;

      if (
        !currRune?.isActive &&
        (parentRune?.isActive || parentRune === undefined)
      ) {
        setPoints((prevState) => prevState + 1);
        updateData();
      }
    }
  };

  return (
    <div className="runetree">
      <div className="runetree-container">
        {data?.map((tree, treeIdx) => (
          // React: "When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort."
          <div className="runetree-tree" key={treeIdx}>
            <p className="runetree-tree-title">TALENT PATH {treeIdx + 1} </p>
            {tree?.map((rune, runeIdx) => (
              <div className="runetree-tree-branch" key={rune.id}>
                <Rune
                  rune={rune.id}
                  onClick={(e) => onRuneClick(e, treeIdx, runeIdx)}
                  onContextMenu={(e) => onRuneClick(e, treeIdx, runeIdx)}
                  isActive={rune.isActive}
                />
                <div
                  className={"bridge " + (rune.isActive ? "bridge-active" : "")}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <Points currPoints={points} maxPoints={maxPoints} />
    </div>
  );
};

export default RuneTree;
