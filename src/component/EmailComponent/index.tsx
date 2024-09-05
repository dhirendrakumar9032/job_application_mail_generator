import React from 'react';
import { Button, message } from 'antd';
import { useStore } from '@/store';
import styles from './index.module.scss';

const EmailComponent: React.FC = () => {
    const { formData, setFormData, setIsMailGenerated, sentToHR } = useStore()
    const { name, position, company, url, yourName } = formData;
    const jobId = url.split('/').splice(-1)[0];

    const emailContent: string = `Hi ${name},\n\nLoved to connect with you.\n\nI am a Frontend Developer and have worked on some exceptional projects in the past.\n\nRight now I am looking out for new opportunity and I saw ${company} is hiring for a  ${position} role.\n\nAre you open to refer me. I would be a great help.\n\nCheck out this job at ${company}: ${url} \n\nJob Id: ${jobId}`;
    const emailContentToHR: string = `Hi ${name},\n\nI hope this message finds you well. \n\nMy name is ${yourName ?? 'Dhirendra Kumar'}, and I am a Front-End Developer with over 3 years of experience. Currently, I am working at Qapita Fintech India Pvt. I noticed that you recently posted a job opening for a ${position}, and I am very interested in exploring this opportunity.\n\nCould you please consider me if the position is still available.\n\nThank you for your time and consideration.\n\nBest regards,\n\nDhirendra Kumar\n\n8604390422\n\nLinkedIn:https://www.linkedin.com/in/dhirendrakumar95/`

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(sentToHR ? emailContentToHR : emailContent);
            message.success('Email copied successfully!');
        } catch (err) {
            message.error('Failed to copy: ');
        }
    };

    const handleReset = () => {
        setFormData({
            yourName:'',
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
            <pre>{sentToHR ? emailContentToHR : emailContent}</pre>
            <footer className={styles.footer}>
                <Button type="primary" onClick={handleCopy}>Click to Copy</Button>
                <Button type="primary" onClick={handleReset}>Generate New Mail</Button>
            </footer>
        </div>
    );
};

export default EmailComponent;
