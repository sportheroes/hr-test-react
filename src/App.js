import React, { useRef, useState, useCallback, useEffect } from 'react';
import merge from 'deepmerge';

import './App.css';

const API_URL = 'https://api.runningheroes.com';
const ACTIVITIES_LIMIT = 10;
const ACTIVITY_TYPE = {
  Running: {
    image: '/images/running.png',
    label: 'Course',
  },
  Cycling: {
    image: '/images/cycling.png',
    label: 'Vélo',
  },
};

// URL: ${API_URL}/v3/users/56c35408de31c6b954b81080/activities
// Method: GET
// Type: application/json
// QueryString :
// {
//   limit : ACTIVITIES_LIMIT,
//   sort: '-points',
//   skip: 0
// }
function fetchActivities({ skip }) {
  const qs = new URLSearchParams(
    Object.entries({
      limit: ACTIVITIES_LIMIT,
      sort: '-date',
      skip,
    }),
  );
  return fetch(
    `${API_URL}/v3/users/56c35408de31c6b954b81080/activities?${qs.toString()}`,
  ).then(res => res.json());
}

function getGroupActivitiesByDate(activities) {
  return activities.reduce((result, activity) => {
    const currentDate = new Date(activity.date);

    const groupDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    );

    result[groupDate] = [...(result[groupDate] || []), activity];

    return result;
  }, {});
}

function getDuration(duration) {
  const d = new Date(duration * 1000);
  return `${d.getHours()}h${d.getMinutes().toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  })}`;
}

function getDistance(distance) {
  return (parseFloat(distance, 10) / 1000).toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
}

const Activity = props => {
  const { activity } = props;

  const type = ACTIVITY_TYPE[activity.type] || {
    label: 'Défaut',
    image: null,
  };
  const distance = getDistance(activity.distance);

  return (
    <div className="App-activity">
      <div className="App-activity__image">
        {type.image && <img src={type.image} alt={type.label} />}
      </div>
      <div className="App-activity__content">
        <div className="App-activity__content__type">{type.label}</div>
        <div className="App-activity__content__distance">{distance} km</div>
      </div>
      <div>{getDuration(activity.duration)}</div>
    </div>
  );
};

const Activities = props => {
  const { listActivities } = props;

  return Object.keys(listActivities).map(key => {
    const activities = listActivities[key];
    const groupDate = new Date(key).toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    return (
      <div key={key} className="App-activities">
        <div className="App-activities__date">{groupDate}</div>
        {activities.map(activity => (
          <Activity key={activity._id} activity={activity} />
        ))}
      </div>
    );
  });
};

const App = () => {
  const totalActivities = useRef(0);
  const [hasMore, setHasMore] = useState(true);
  const [listActivities, setListActivities] = useState(null);

  const getActivities = useCallback(async ({ skip = 0 } = {}) => {
    const { results: activities } = await fetchActivities({ skip });

    totalActivities.current += activities.length;

    if (activities.length < ACTIVITIES_LIMIT) {
      setHasMore(false);
    }

    const groupActivitiesByDate = getGroupActivitiesByDate(activities);

    setListActivities(merge(listActivities || {}, groupActivitiesByDate));
  });
  const handleClickViewMore = useCallback(() => {
    getActivities({ skip: totalActivities.current });
  });

  // DidMount
  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Activités</header>
      <div className="App-content">
        {listActivities && <Activities listActivities={listActivities} />}
      </div>
      {listActivities && hasMore && (
        <div className="App-more" onClick={handleClickViewMore}>
          Voir plus
        </div>
      )}
    </div>
  );
};

export default App;
