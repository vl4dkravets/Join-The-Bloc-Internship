import React from 'react'
const JobLists = (props) => (
    <div className='card flex shadow-xl mx-20 p-5'>
        <div>
            <img className='image' src={props.job.company_logo} alt={props.job.company} width="150" height="150"></img>
        </div>
        <div className='job-info flex flex-col justify-between ml-8 p-5'>
            <h3 className='title font-bold'>{props.job.title}</h3>
            <p className='company text-teal-700'>Company: {props.job.company}</p>
            <p className='company_url text-blue-500'><a href={props.job.company_url} target="_blank">Visit Company website</a></p>
            <p className='location'>Location: {props.job.location}</p>
            <p className='job-type'>{props.job.type}</p>
            <p className='company_url text-blue-500'><a href={props.job.url} target="_blank">Click here to apply</a></p>
            <p className='post-time text-gray-700'>Posted at: {new Date(props.job.created_at).toLocaleDateString()}</p>
        </div>
        <div>
        </div>

    </div>
)
export default JobLists