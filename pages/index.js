import Image from 'next/image'
import Layout from '../components/Layout'
import SearchJobs from '../components/SearchJobs'
import JobList from '../components/JobList'
import {useState} from 'react'


export const getStaticProps = async() => {
  const res = await fetch('https://jobs.github.com/positions.json');
  const jobs = await res.json();

  return {
    props : {
      jobs : jobs
    }
  }
}

export default function Home({jobs}) {
  const [keyword,setKeyword] = useState("");
  const filterJobs = jobs.filter((job) => 
  job.title.toLowerCase().includes(keyword) || job.type.toLowerCase().includes(keyword) || 
  job.company.toLowerCase().includes(keyword) || job.location.toLowerCase().includes(keyword)
  );
  const search = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }
  console.log(keyword)
  return (
    <Layout>
      <SearchJobs onChange={search}/>
      <JobList jobs={filterJobs}/>
    </Layout>
  )
}
