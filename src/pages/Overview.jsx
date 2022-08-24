import { Statistics } from '../cmps/Statistics';
import { DailyTasks } from '../cmps/Daily-tasks';
import { Workers } from '../cmps/Workers';
import { Comments } from '../cmps/Comments';
import statisticsIcon from '../assets/icons/statistics.svg';
import dailyTasksIcon from '../assets/icons/daily-tasks.svg';
import workerIcon from '../assets/icons/workers.svg';
import commentsIcon from '../assets/icons/comments.svg';

export const Overview = () => {
  const overviewTitles = [
    {
      component: <Statistics />,
      class: 'item1',
      title: 'Statistics',
      icon: statisticsIcon,
    },
    {
      component: <DailyTasks />,
      class: 'item2',
      title: 'Daily-tasks',
      icon: dailyTasksIcon,
    },
    {
      component: <Workers />,
      class: 'item3',
      title: 'Workers',
      icon: workerIcon,
    },
    {
      component: <Comments />,
      class: 'item4',
      title: 'Comments',
      icon: commentsIcon,
    },
  ];

  return (
    <div className="grid-container">
      {overviewTitles.map((title, i) => (
        <div key={i} className={title.class}>
          <div className="flex title-container">
            <div
              style={{
                backgroundImage: `url(${title.icon})`,
                width: `1rem`,
                height: `1rem`,
                backgroundSize: `contain`,
                backgroundRepeat: `no-repeat`,
              }}
            />
            <p className="overview-titles">{title.title}</p>
          </div>
          {title.component}
        </div>
      ))}
    </div>
  );
};
