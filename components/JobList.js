import Link from 'next/link'

const JobList = ({jobs}) => {
    return ( 
        <div>
            <table class="table table-dark">
                <thead>
                    <tr>
                    
                    <th scope="col">Title</th>
                    <th scope="col">Company</th>
                    <th scope="col">Type</th>
                    <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((job)=>(
                            <Link href={job.url}>
                                <tr>
                                    <td>{job.title}</td>
                                    <td>{job.company}</td>
                                    <td>{job.type}</td>
                                    <td>{job.location}</td>
                                </tr>
                            </Link>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default JobList;