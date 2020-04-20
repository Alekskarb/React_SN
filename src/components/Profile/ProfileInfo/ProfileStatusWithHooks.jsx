import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activatedMode = () => {
        setEditMode(true);
    };
    const deactivatedMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activatedMode}> {props.status || 'glad to see you'} </span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onBlur={deactivatedMode}
                       value={status}
                       onChange={onStatusChange}
                       autoFocus={true}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;