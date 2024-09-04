import React from 'react';
import { Button, message } from 'antd';
import { useStore } from '@/store';
import styles from './index.module.scss';

const EmailComponent: React.FC = () => {
    const { formData, setFormData, setIsMailGenerated, sentToHR } = useStore()
    const { name, position, company, url, yourName } = formData;
    const jobId = url.split('/').splice(-1)[0];

    const emailContent: string = `Hi ${name},\n\n Loved to connect with you.\n\n I am Frontend Developer and have worked on some execeptional project in past.\n\n Right now I am looking out for new opportunity and I saw ${company} is hiring for a  ${position} role.\n\n Could you please refer me for this role or share the contact information for the HR person?\n\n I would be a great help.\n\n Check out this job at ${company}: ${url} \n\n Job Id: ${jobId}`;
    const emailContentToHR: string = `Hi ${name},\n\n I hope this message finds you well. \n\nMy name is ${yourName ?? 'Dhirendra Kumar'}, and I am a Front-End Developer with over 3 years of experience. Currently, I am working at Qapita Fintech India Pvt. I noticed that you recently posted a job opening for a ${position}, and I am very interested in exploring this opportunity.\n\n Could you please consider me if the position is still available.\n\n Thank you for your time and consideration.\n\n Best regards,\n\n Dhirendra Kumar\n\n 8604390422\n\n LinkedIn:https://www.linkedin.com/in/dhirendrakumar95/`

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
