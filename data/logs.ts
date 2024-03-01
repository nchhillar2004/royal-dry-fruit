import SiteConfig from "@/config/site";

interface LogData {
    userId: string;
    logType: string;
    message: string;
    errorCode: Number;
    endpoint: string;
    responseBody: string;
}

export const createLogs = async (logData: LogData): Promise<any> => {
    try {

        const response = await fetch(`${SiteConfig.url}/api/post/logs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(logData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error adding log data:', error);
    }
};
