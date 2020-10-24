import React from 'react'
/*
JobLists display a list of jobs
jobLists components receives job as props to access job's info
*/
const JobLists = (props) => (
    <div className='card'>
        <div>
            <img src={props.job.company_logo} alt={props.job.company} width="125" height="100"></img>
        </div>
        <div><h3>{props.job.title}</h3></div>
        <div><p>Company: {props.job.company}</p></div>
        <div>
            <p>{props.job.type}</p>
            <p>Location: {props.job.location}</p>
            <p>Posted at: {props.job.created_at}</p>
        </div>
        <br></br>
        <br></br>
        <br></br>      
    </div>
)
export default JobLists