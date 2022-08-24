import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export const Statistics = () => {
  const statisticsContent = [
    { percentage: 65, text: 'Daily tasks completed' },
    { percentage: 35, text: 'Weekly tasks completed' },
    { percentage: 25, text: 'Monthly tasks completed' },
  ];

  const pathColor = percentage => {
    return percentage <= 25
      ? '#F42D2D'
      : percentage <= 50
      ? '#FFA02E'
      : '#1CB854';
  };

  return (
    <div className="statistics">
      <div className="progress-bar-container flex justify-center">
        {statisticsContent.map((content, i) => (
          <div className="statistics-content" key={i}>
            <div style={{ width: `103px`, height: `103px`, margin: `auto` }}>
              <CircularProgressbar
                value={content.percentage}
                text={`${content.percentage}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',

                  // Text size
                  // textSize: '16px',

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: pathColor(content.percentage),
                  // // pathColor: `rgba(62, 152, 199, ${percentage1 / 100})`,
                  // textColor: '#f88',
                  trailColor: '#E8E5E8',
                  // // backgroundColor: '#3e98c7',
                })}
              />
            </div>
            <p className="mar-t-11">{content.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
