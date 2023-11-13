import { GymSchedules } from "../particles/Data"; // Update the path accordingly

const SchedulePage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h1 className="text-orange-500 mt-10 text-2xl">
        {GymSchedules.firstText}
      </h1>
      <h2 className="text-gray-900 text-1.5xl mb-20">
        {GymSchedules.secondText}
      </h2>
      <div className="grid grid-cols-4 gap-20 justify-center">
        {GymSchedules.schedules.map((schedule, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-8 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-orange-500 text-1.2xl mb-5">{schedule.day}</h3>
            <p className="text-gray-900 text-1xl mb-10">{schedule.time}</p>
            <p className="text-gray-900 text-1xl mb-10">{schedule.activity}</p>
            <p className="text-gray-900 text-1xl mb-10">
              {schedule.instructor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
