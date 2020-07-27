import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {firebase} from '../firebase';
import moment from 'moment';


//Checkbox to mark the tasks as Completed
export const Checkbox = ({id, taskDesc} ) => {
    const[showComplete, setShowComplete] = useState(false);
    const completeTask = () => {
        firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({
            completed: true,
            date: moment().format('DD/MM/YYYY')
        });
    }

    return (
        <div
          className="checkbox-holder"
          data-testid="checkbox-action"
          onClick={() => setShowComplete(!showComplete)}
          onKeyDown={(e) => {
              if(e.key ==='Enter') setShowComplete(!showComplete);
          }}
          tabIndex={0}
          role="button"
          aria-label="mark as complete"
          >
          {showComplete && (
              <div className="complete-task">
                 <div className="complete-task-inner">
                     <p>Mark as Complete?</p>
                     <button 
                     type="button"
                     onClick={() => completeTask()}
                     >
                         Yes
                     </button>
                     <span
                     onClick={()=>setShowComplete(showComplete)}
                     onKeyDown={(e) =>{
                         if(e.Key ==='Enter') setShowComplete(!showComplete);
                     }}
                     tabIndex={0}
                     role="button"
                     aria-label="Cancel completing">
                         Cancel
                     </span>
                 </div>
                 </div>
          )}
          <span className="checkbox" />
        </div>
      );
    };
    
    Checkbox.propTypes = {
      id: PropTypes.string.isRequired,
      taskDesc: PropTypes.string.isRequired,
    };