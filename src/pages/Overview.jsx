import React, { useState } from 'react';
import { Statistics } from '../cmps/Statistics';
import { DailyTasks } from '../cmps/Daily-tasks';
import { WorkersPreview } from '../cmps/WorkersPreview';
import { Comments } from '../cmps/Comments';
import statisticsIcon from '../assets/icons/statistics.svg';
import dailyTasksIcon from '../assets/icons/daily-tasks.svg';
import popupIcon from '../assets/icons/popup.svg';
import workerIcon from '../assets/icons/workers.svg';
import commentsIcon from '../assets/icons/comments.svg';

export const Overview = () => {
  const [isWorkersPopupOpen, setIsWorkersPopupOpen] = useState(false);
  const [isCommentsPopupOpen, setIsCommentsPopupOpen] = useState(false);
  const handlePopupClick = e => {
    handleCloseClick();
    e.target.name === 'Workers'
      ? setIsWorkersPopupOpen(true)
      : setIsCommentsPopupOpen(true);
  };

  const handleCloseClick = e => {
    setIsWorkersPopupOpen(false);
    setIsCommentsPopupOpen(false);
  };
  const overviewTitles = [
    {
      component: <Statistics />,
      class: 'item1',
      title: 'Statistics',
      icon: statisticsIcon,
      popupIcon: false,
    },
    {
      component: <DailyTasks />,
      class: 'item2',
      title: 'Daily-tasks',
      icon: dailyTasksIcon,
      popupIcon: false,
    },
    {
      component: (
        <WorkersPreview
          isOpen={isWorkersPopupOpen}
          onClose={handleCloseClick}
          title={'Workers'}
        />
      ),
      class: 'item3',
      title: 'Workers',
      icon: workerIcon,
      popupIcon: true,
    },
    {
      component: (
        <Comments
          isOpen={isCommentsPopupOpen}
          onClose={handleCloseClick}
          title={'Comments'}
        />
      ),
      class: 'item4',
      title: 'Comments',
      icon: commentsIcon,
      popupIcon: true,
    },
  ];

  return (
    <div>
      <div className="grid-container">
        {overviewTitles.map((title, i) => (
          <div key={i} className={`${title.class} flex column`}>
            <div className="flex align-center space-between w-91 center-self">
              <div className="flex title-container">
                <div
                  className="title-icon"
                  style={{
                    backgroundImage: `url(${title.icon})`,
                  }}
                />
                <p className="overview-titles">{title.title}</p>
              </div>
              {title.popupIcon && (
                <button
                  className="popup-icon clean-btn"
                  name={title.title}
                  style={{
                    backgroundImage: `url(${popupIcon})`,
                  }}
                  onClick={handlePopupClick}
                />
              )}
            </div>
            {title.component}
          </div>
        ))}
      </div>
    </div>
  );
};
