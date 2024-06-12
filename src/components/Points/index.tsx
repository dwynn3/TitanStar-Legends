import "./index.css";

interface PointsProps {
  currPoints: number;
  maxPoints: number;
}

const Points = ({ currPoints, maxPoints }: PointsProps) => {
  return (
    <section className="points">
      <h1 className="points-amount">
        {currPoints} / {maxPoints}
      </h1>
      <h1 className="points-title">Points Spent</h1>
    </section>
  );
};

export default Points;
