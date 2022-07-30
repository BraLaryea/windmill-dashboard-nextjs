import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
// import axios from 'axios';
import Topnav from '../Topnav';
import Sidenav from '../Sidenav'
const Layout = ({ children }) => {
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)
    // const { user, setUser } = useAuthContext()

    // async function checker() {
    //     if (typeof window !== "undefined") {
    //         if (localStorage.getItem("tkauth")) {
    //             const token = localStorage.getItem("tkauth");
    //             await axios(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
    //                 headers:
    //                 {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': 'Bearer ' + token
    //                 }
    //             })
    //                 .then(data => {
    //                     setUser(data.data.data.user)
    //                     // return data.data.data
    //                 })
    //                 .catch((error) => {
    //                     console.log('Error:', error.response.data.message);
    //                     localStorage.removeItem("tkauth")
    //                     setUser(null)
    //                     // return null
    //                 });
    //         }
    //     }
    // }

    // useEffect(() => {
    //     checker()
    // }, [])
    return (
        <>
            <Head>
                <title>PharmAssist Dashboard</title>
                <link rel="icon" href="../../favicon.png" />
                <meta name="description" content="Book A Dishwasher today" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css" />
            </Head>
            <Script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" />
            <Script src="/plugins/init-alpine.js" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" />
            <Script src="/plugins/charts-lines.js" />
            <Script src="/plugins/charts-pie.js" />
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >

                <Sidenav />
                <div className="flex flex-col flex-1">
                    <Topnav />
                    <main>{children}</main>
                </div>
            </div>
        </>
    );
};

export default Layout;
