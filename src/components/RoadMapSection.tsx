import { RoadmapType } from "../types";
import Milestone from "./Milestone";

const roadMap: Array<RoadmapType> = [
  {
    id: 1,
    name: "Project Kickoff",
    description: "Kick-off meeting and requirement gathering",
  },
  {
    id: 2,
    name: "Design",
    description: "Design and Prototyping",
  },
  {
    id: 3,
    name: "Development",
    description: "Development and Testing",
  },
  {
    id: 4,
    name: "Deployment",
    description: "Deployment and final testing",
  },
  {
    id: 5,
    name: "Maintenance",
    description: "Maintenance and support",
  },
];

const RoadMapSection = () => {
  return (
    <section className="max-w-80 mx-auto">
      <h1 className="font-semibold text-3xl text-center mb-16 font-display">Roadmap</h1>
      {roadMap.map((roadMapItem, index) => (
        <Milestone
          key={index}
          title={roadMapItem.name}
          description={roadMapItem.description}
          lastItem={index === roadMap.length - 1}
        />
      ))}
    </section>
  );
};

export default RoadMapSection;
