import Link from "next/link";
import { ChangeTemperatureMeasurement } from "./ChangeTemperatureMeasurement";
import TodaysHighlights from "./TodaysHighlights";
import WeekWheather from "./WeekWheather";

export const WeatherDisplay = () => {
  return (
    <main className="bg-darkest py-6 lg:py-10 px-10 lg:px-10 xl:20 2xl:px-40 flex-1 space-y-14">
      <ChangeTemperatureMeasurement />
      <WeekWheather />
      <TodaysHighlights />
      <div className="text-center">
        <p>
          created by{" "}
          <span className="underline font-bold">
            <Link href="https://github.com/rmrantunes">@rmrantunes</Link>{" "}
          </span>
          - devChallenges.io
        </p>
      </div>
    </main>
  );
};
