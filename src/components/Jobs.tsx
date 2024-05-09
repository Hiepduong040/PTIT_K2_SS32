// import React from 'react'
// import Job from './Job'
// interface Props{
//   job: Jobs[]
  
// }

// interface Jobs{
//   name:string,
//   id:number,
//   status:boolean
// }

// export default function Jobs(props:Props) {
//   // console.log("111111",props);
//   //destructoring
//   const {job} = props;
//   return (
//     <div>Jobs
//       {job.map((item,index)=>{
//         return<Job nameJob={item.name}></Job>
//       })}
//     </div>
//   )
// }


import { useState } from "react"
import Job from "./Job";

interface Job{
    id: string,
    name: string,
    status: boolean
}
export default function Jobs() {
    const [jobs, setJobs] = useState<Job[] | null>(() =>{
        const localJob = localStorage.getItem('jobs');
        if(localJob) return JSON.parse(localJob) as Job[];
        return null
    })
    console.log(jobs);
  return (
    <>
        {jobs? jobs.map(e =>{
            return (
                <Job job={e}></Job>
            )
        }) : ''}
    </>
  )
}