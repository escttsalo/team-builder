import React from 'react';

export default function Member(props) {
    const { member } = props;

    if (!member) {
        return <h3>Working on getting member info... </h3>
    }

    return (
        <div classname='member container'>
            <h2>{member.username}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <p>Member since: {member.date}</p>
        </div>
    )
}