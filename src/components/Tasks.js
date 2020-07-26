import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { ArchiveTask } from './ArchiveTask';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context';

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = '';

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: Prossign`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <div class="tasks__check">
              {task.completed ? <ArchiveTask id = {task.id} taskDesc={task.task} /> : <Checkbox id = {task.id} taskDesc={task.task} />}
            </div>
            <div class="tasks__date">
            
            <span>{task.completed ? task.date : undefined}</span>
            </div>
            
            <div class="tasks__name">
            <span>{task.task}</span>
            </div>
            
          </li>
        ))}
      </ul>
      {projectName == 'Completed'? undefined : <AddTask />}
    
      
    </div>
  );
};