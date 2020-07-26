import React, { useState } from 'react';
import { AddTask } from '../AddTask';
import {firebase} from '../../firebase'
import {
  FaColumns,
} from 'react-icons/fa';

export const Header = () => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const logout = () =>
  firebase.auth().signOut();

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <span>
          <FaColumns/>
          {'     '}Prossign
          </span>
        </div>    
        <div className="settings">
          <ul>
          
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >
                +
              </button>
            </li>
            
            <li className="settings__logout">
              <button
              data-test-id="logout"
              aria-label="logout on/off"
              type="button"
              onClick={() => logout()}>
                logout 
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
      
    </header>
  );
};
