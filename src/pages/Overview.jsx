import { Workers } from '../cmps/Workers';
import { Statistics } from '../cmps/Statistics';
import { DailyTasks } from '../cmps/Daily-tasks';
import { Comments } from '../cmps/Comments';

export const Overview = () => {
  return (
    <div className="grid-container">
      <div className="item1">
        <Statistics />
      </div>
      <div className="item2">
        <DailyTasks />
      </div>
      <div className="item3">
        <Workers />
      </div>
      <div className="item4">
        <Comments />
      </div>
    </div>
  );
};
