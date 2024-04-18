import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localStorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast(`You Apply For ${job.job_title} is Successfully`)
    }

    console.log(id, job)
    console.log(job.contact_information.phone)
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2>Job Description: {job.job_description}</h2>
                    <h2>Job Responsibility: {job.job_responsibility}</h2>
                    <h2>Educational Requirements: {job.educational_requirements}</h2>
                    <h2>Experiences: {job.experiences}</h2>
                </div>
                <div className='border'>
                    <h2 className="text-4xl">Job Details</h2>
                    <hr />
                    <h2 className='flex gap-2'><HiOutlineCurrencyDollar className='text-2xl'></HiOutlineCurrencyDollar>{job.salary}</h2>
                    <h2>Job Title: {job.job_title}</h2>
                    <h2 className="text-2xl">Contact Information</h2>
                    <hr />
                    <h2 className=''>Phone: {job.contact_information.phone}</h2>
                    <h2>Email: {job.contact_information.email}</h2>
                    <h2>Address: {job.contact_information.address}</h2>
                    <button onClick={handleApplyJob} className='btn btn-primary w-full'>Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;