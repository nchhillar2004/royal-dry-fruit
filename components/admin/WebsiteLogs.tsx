import React from "react";
import SiteConfig from "@/config/site";

export default async function WebsiteLogs() {
    const response = await fetch(`${SiteConfig.url}/api/get/logs`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const logs = await response.json();

    return (
        <section>
            <div className="logs">
                <code className="text-black text-2xl font-semibold mb-4">Website Logs</code>
                <ul className="font-mono flex flex-col-reverse space-y-2 font-bold">
                    {logs.map((log: any) => (
                        <li key={log.id} className="flex py-2 bg-gray-900 px-4">
                            <p className="text-yellow-600">{log.timestamp}</p>
                            <p className="text-purple-600">{log.endpoint}</p>
                            <p className="text-green-600">{log.logType}</p>
                            <p className="text-white">{log.message}</p>
                            <p className="text-blue-600">{log.errorCode}</p>
                            <p className="text-orange-600">{log.responseBody}</p>
                            <p className="text-zinc-400">{log.ipAddress}</p>
                            <p className="text-pink-600">{log.userAgent}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
