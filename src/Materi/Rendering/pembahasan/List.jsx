import React from "react";

export default class List extends React.Component {
    state = {
        users: ['Fahril', 'Vian', 'Arif', 'Kak Ichal', 'Kak Syarif']
    }
    render () {
        return (
            <div>
                {
                    this.state.users.map((user, i) => <li key={i}>{user}</li>)
                }
            </div>
        )
    }
}