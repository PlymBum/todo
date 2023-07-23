import React from "react";
import PropTypes from 'prop-types';
import './TasksFilter.css'

const TasksFilter = ({filter,onChangeFilter}) =>{
    return(
        
        <ul className="filters">
            <li>
                <button className={filter==='ALL'?'selected':''} onClick={()=>onChangeFilter('ALL')}>All</button>
            </li>
            <li>
                <button className={filter==='ACTIVE'?'selected':''} onClick={()=>onChangeFilter('ACTIVE')}>Active</button>
            </li>
            <li>
                <button className={filter==='COMPLETED'?'selected':''} onClick={()=>onChangeFilter('COMPLETED')}>Completed</button>
            </li>
      </ul>
    )
}

TasksFilter.propsType={
    filter: PropTypes.oneOf(['ALL', 'ACTIVE','COMPLETED']),
    onChangeFilter: PropTypes.func
}

export default TasksFilter;