import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {firebase} from '../firebase';

//Archive the tasks so that they no longer appears in Completed Section.
export const ArchiveTask = ({id, taskDesc} ) => {
    const[showArchive, setShowArchive] = useState(false);
    const ArchiveTask = () => {
        firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({
            archived: true,
        });
    }

    return (
        <div
          className="archive-holder"
          data-testid="archive-action"
          onClick={() => setShowArchive(!showArchive)}
          onKeyDown={(e) => {
              if(e.key ==='Enter') setShowArchive(!showArchive);
          }}
          tabIndex={0}
          role="button"
          aria-label="mark as archived"
          >
          {showArchive && (
              <div className="archive-task">
                 <div className="archive-task-inner">
                     <p>Archive this task?</p>
                     <button 
                     type="button"
                     onClick={() => ArchiveTask()}
                     >
                         Yes
                     </button>
                     <span
                     onClick={()=>setShowArchive(showArchive)}
                     onKeyDown={(e) =>{
                         if(e.Key ==='Enter') setShowArchive(!showArchive);
                     }}
                     tabIndex={0}
                     role="button"
                     aria-label="Cancel archiving">
                         Cancel
                     </span>
                 </div>
                 </div>
          )}
          <span className="archive" />
        </div>
      );
    };
    
    ArchiveTask.propTypes = {
      id: PropTypes.string.isRequired,
      taskDesc: PropTypes.string.isRequired,
    };