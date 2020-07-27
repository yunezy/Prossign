import React, { useState } from 'react';
import {
  FaChevronDown,
  FaCalendarCheck,
  FaCalendar,
} from 'react-icons/fa';
import { Projects } from '../Projects';
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';


//Display of Sidebar.
export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('todo');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="todo"
          className={active === 'todo' ? 'active' : undefined}
        >
          <div
            data-testid="todo-action"
            aria-label="Show to-do tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('todo');
              setSelectedProject('TODO');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('todo');
                setSelectedProject('TODO');
              }
            }}
          >
            <span>
              <FaCalendar />
            </span>
            <span>To-do</span>
          </div>
        </li>
        <li
          data-testid="completed"
          className={active === 'completed' ? 'active' : undefined}
        >
          <div
            data-testid="to-do-action"
            aria-label="Show to-do tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('completed');
              setSelectedProject('COMPLETED');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('completed');
                setSelectedProject('COMPLETED');
              }
            }}
          >
            <span>
              <FaCalendarCheck />
            </span>
            <span>Completed</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowProjects(!showProjects);
        }}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  );
};