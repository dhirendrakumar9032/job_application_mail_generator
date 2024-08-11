// EmailComponent.tsx
import React from 'react';
import { Button, message } from 'antd';
import styles from './index.module.scss'; 
import { useStore } from '@/store';

interface FormData {
    name: string;
    position: string;
    company: string;
    url: string;
    jobId: string;
}

interface EmailProps {
    formData: FormData;
}

const EmailComponent: React.FC= () => {
    const {formData,setFormData,setIsMailGenerated,sentToHR} = useStore()
    const { name, position, company, url} = formData;
    const jobId = url.split('/').splice(-1)[0]; 
    console.log({jobId});

    const emailContent = `Hi ${name},\n\nIt's great connecting with you. I saw a ${position} job post on LinkedIn for ${company} and I'm very interested.\n\nCould you please refer me or share the contact information for the HR person?\n\nThank you for your support,\n\nCheck out this job at ${company}: ${url} \n\nJob Id: ${jobId}`;
    const emailContentToHR=`Hi ${name},\n\nI hope this message finds you well.\n\nMy name is Dhirendra Kumar, and I am a React Front-End Developer with over 3 years of experience. Currently, I am working at Qapita Fintech India Pvt. I noticed that you recently posted a job opening for a React Developer, and I am very interested in exploring this opportunity.\n\nCould you please let me know if the position is still available?\n\nThank you for your time and consideration.\n\nBest regards,\n\nDhirendra Kumar\n\n8604390422`
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(emailContent);
            message.success('Email copied successfully!');
        } catch (err) {
            message.error('Failed to copy: ');
        }
    };

    const handleReset=()=>{
        setFormData({
            name: '',
            position: '',
            company: '',
            url: '',
        });
        setIsMailGenerated(false)
    }

    return (
        <div className={styles.emailContainer}>
            <h1>Email to {name}</h1>
            <pre>{sentToHR?emailContentToHR:emailContent}</pre>
            <footer className={styles.footer}>
            <Button type="primary" onClick={handleCopy}>Copy Email</Button>
            <Button type="primary" onClick={handleReset}>Generate New Mail</Button>
            </footer>
        </div>
    );
};

export default EmailComponent;
