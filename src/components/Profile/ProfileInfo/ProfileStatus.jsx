import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activatedMode =()=> {
        this.setState({ editMode: true });
    }

    deactivatedMode =()=> {
        this.setState({ editMode: false });
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange =(e)=> {
        this.setState({ status: e.currentTarget.value});
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <div onDoubleClick={this.activatedMode}> {this.props.status} </div>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivatedMode}
                               value={this.state.status}
                               onChange={this.onStatusChange}
                        autoFocus={true}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;