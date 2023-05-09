import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        // <section id="timeline">
        //     <div className="single-timeline">
        //         <h1 className="inshaallaah">Inshaallaah ...</h1>

        //         <div
        //             className="wrapper"
        //             data-aos="fade-up"
        //             data-aos-delay="100"
        //         >
        //             <div className="content">
        //                 <h1>Nikaah</h1>
        //                 <p>
        //                     On Friday, 3<sup>rd</sup> February, 2023,
        //                     <br />
        //                     11<sup>th</sup> Rajab-ul-Murajjab, 1444 Hijri,
        //                     <br />
        //                     Time: 07:30 PM.
        //                 </p>
        //                 <h2>Venue:</h2>
        //                 <p>
        //                     Farhan Khan Hall,
        //                     <br /> Millat Nagar,
        //                     <br /> Bhiwandi.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section id="timeline">
            <div className="multi-timeline">
                <h1 className="inshaallaah">Inshaallaah ...</h1>
                <div className="wrapper">
                    {/* shukrana included */}
                    <>
                        <div className="row">
                            <div className="col-lg-6 left" data-aos="fade-down">
                                <h1>Jodeh</h1>
                                <p>
                                    On Thursday, 18<sup>th</sup> May, 2023.
                                    <br />27<sup>th</sup> Shawwal-ul-Mukarram, 1444
                                    Hijri,
                                    <br />
                                    Time: 09:00 PM.
                                </p>
                                <h2>Venue:</h2>
                                <p>At Our Residence.</p>
                            </div>
                            <div
                                className="col-lg-6 right"
                                data-aos="fade-down"
                            ></div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            ></div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            >
                                <h1>Nikaah</h1>
                                <p>
                                    On Friday, 19<sup>th</sup> May, 2023,
                                    <br />28<sup>th</sup> Shawwal-ul-Mukarram, 1444
                                    Hijri,
                                    <br />
                                    Time: 11:30 AM.
                                </p>

                                <h2>Nikaah At:</h2>
                                <p>
                                  Masjid-e-Ata-e-Rasool, 
                                    <br /> MW Function Hall,
                                    <br /> Atmakur.
                                </p>

                                <h2>Lunch Follows At:</h2>
                                <p>
                                    MW Functional Hall,
                                    <br /> Vijayawda Road,
                                    <br /> Atmakur.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            >
                                <h1>Valima</h1>

                                <p>
                                    On Saturday, 20<sup>th</sup> May, 2023,
                                    <br />29<sup>th</sup> Shawwal-ul-Mukarram, 1444
                                    Hijri,
                                    <br />
                                    Time: 01:30 PM.
                                </p>

                                <h2>Venue:</h2>
                                <p>
                                    At Our Residence,
                                    <br /> H.No.: 11/11, Mullapeta,
                                    <br /> Sirvella Post & Mandal
                                    <br /> Nandyal Dist., AP.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            ></div>
                        </div>
                    </>

                    {/* shukrana excluded */}
                    {/* <>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            >
                                <h1>Nikaah</h1>
                                <p>
                                    On Tuesday, 09<sup>th</sup> May, 2023,
                                    <br />
                                    18<sup>th</sup> Shawwal-ul-Mukarramam, 1444
                                    Hijri,
                                    <br />
                                    Time: 12:30 PM.
                                </p>

                                <h2>Venue:</h2>
                                <p>
                                    Muslim Function Hall,
                                    <br /> Opposite Ranga Mandir,
                                    <br /> Bellari, Karnataka - 583 101.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            ></div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            ></div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            >
                                <h1>Valima</h1>
                                <p>
                                    On Wednesday, 10<sup>th</sup> May, 2023,
                                    <br />
                                    19<sup>th</sup> Shawwal-ul-Mukarramam, 1444
                                    Hijri,
                                    <br />
                                    Time: 02:00 PM.
                                </p>
                                <h2>Venue:</h2>
                                <p>
                                    Danish Function Hall,
                                    <br /> Bypass Road, Adoni,
                                    <br /> Kurnool Dist., AP - 518 301.
                                </p>
                            </div>
                        </div>
                    </> */}
                </div>
            </div>
        </section>
    );
}

export default Timeline;
