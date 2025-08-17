        import React, { useState, useEffect } from 'react';

        interface CurrentTimeProps {
            className?: string;
        }

        function getPhilippineTime() {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Asia/Manila',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            return now.toLocaleString('en-PH', options);
        }

        const CurrentTime: React.FC<CurrentTimeProps> = ({ className = '' }) => {
            const [mounted, setMounted] = useState(false);
            const [time, setTime] = useState('');

            useEffect(() => {
                setMounted(true);
            }, []);

            useEffect(() => {
                if (!mounted) return;
                setTime(getPhilippineTime());
                const interval = setInterval(() => {
                    setTime(getPhilippineTime());
                }, 1000);
                return () => clearInterval(interval);
            }, [mounted]);

            if (!mounted) return null;

            return (
                <span className={className}>{time}</span>
            );
        };

        export default CurrentTime;