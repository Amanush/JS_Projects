function TodoItem(props) {
    return ( <>
          <li className="list-group-item d-flex justify-content-between align-items-center" key={props.index}>
              {props.task}
              <button className="btn btn-danger" onClick={() => props.onClick(props.index)}>
                Remove
              </button>
            </li>   
    
    </> );
}

export default TodoItem;