import React from 'react';
import styles from './TodoSearch.module.css';

function TodoSearch(props) {
    return (
        <div>
            <input
                type="text"
                id="todoSearchInput"
                className={styles.searchInput}
                placeholder="Search..."
                onChange={props.search}/>
        </div>
    )
}

export default TodoSearch;