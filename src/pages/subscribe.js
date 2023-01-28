import Image from 'next/image';
import Link from 'next/link';
import SocialData from "../data/social/SocialData.json";
import HeadTitle from "../common/elements/head/HeadTitle";
import Script from 'next/script';


const Maintenance = () => {
    if (typeof window !== "undefined") {
        var colorMode = window.localStorage.getItem('color-mode');
    }

    return (
        <>
       
            <HeadTitle pageTitle="Subscribe"/>
            <div className="maintanence-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                            <div className="content">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <Image
                                                className="dark-logo"
                                                width={153}
                                                height={40}
                                                src={(colorMode === "Dark" ? "/images/logo/logo-white2.webp" : "/images/logo/logo-black.webp") || "/images/logo/logo-black.webp"}
                                                alt="Blogar logo"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <h1 className="title">Hey there, fellow horror enthusiasts!</h1>
                                <h5>Subscribe to our newsletter</h5>
                                <p>We won't spam your inbox. We only email when there are new reviews, deep dives, TFQ updates.  So make sure to join the club for horror junkies!</p>

                                {/* ConvertKit Subscription Form */}
                                <div style={{marginLeft: '32.5% !important'}}>
                                    <Script async data-uid="28418f1911" src="https://dogged-artisan-4360.ck.page/28418f1911/index.js"></Script>
                                </div>
                                
                                <br />
                                <div className="inner d-flex align-items-center flex-wrap">
                                    <h5 className="follow-title mb--0 mr--20">Follow us on social media too</h5>
                                    <ul className="social-icon color-tertiary md-size justify-content-start">
                                        <li>
                                            <a href={SocialData.fb.url} target="_blank">
                                                <i className={SocialData.fb.icon} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={SocialData.instagram.url} target="_blank">
                                                <i className={SocialData.instagram.icon} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={SocialData.discord.url} target="_blank">
                                                <i className={SocialData.discord.icon} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 order-lg-2 col-lg-5 offset-lg-1">
                            <div className="thumbnail">
                            <Image
                                width={495}
                                height={480}
                                src="https://res.cloudinary.com/think-halcyon-llc/image/upload/v1674920913/The%20Fright%20Queen/TFQ-PodcastCover_3k_njkj8k.png"
                                alt="The Fright Queen Presents"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Maintenance;