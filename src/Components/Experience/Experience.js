import React from 'react'
import Card from '../Card/Card'
export default function Experience() {
    return (
        <div className="container-fluid">
            <div className="row">
                    <div className="col-md-4">
                    <Card name={'iee'} ext={'svg'} title={'IEEE SRM'} desc={"IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. I worked in its official student chapter at my college as a webdeveloper and also got various opportunities like working on the website for concepto and other events."} />
                    </div>
                    <div className="col-md-4">
                    <Card name={'webarch'} ext={'png'} title={'WebArch'} desc={"This is the oldest Tech Club of my college and that is also why I am proud to its part. I am currently working here as a part of the web development and designing team. I have contributed to many projects like allumini portal and making a new official website for the club."} />
                    </div>
                    <div className="col-md-4">
                    <Card name={'HE'} ext={'svg'} title={'SRM HACKEREARTH'} desc={"SRM HackerEarth is the official Campus Club of HackerEarth at SRM Institute of Science and Technology, Kattankulathur and I am presently working as a Technical Head in it. We are a Student-led Community focused at helping future developers be better."} />
                    </div>
            </div>


             <div className="row">
                        <div className="col-md-4">
                        <Card name={'dsc'} ext={'png'} title={'DSCSRM'} desc={"Developer Student Clubs are university based community groups for students interested in Google developer technologies.I am currently working here as a technical associate. I have got opportunities to complete Google's 30 day Cloud programme , contributing to club's official website and speaking at many workshops as well."}/>
                        </div>
                        <div className="col-md-4">
                        <Card name={'solo'} ext={'png'} title={'Admere Selvyn'} desc={"Admere selvyn is the company which is known for its work in the field of online music industry. My role as a Web-development intern was to come up with innovative ideas and implement them in making their online music platform look more appealing. I worked on various projects during the tenure and learned a lot from my peers as well."} />
                        </div>
                        <div className="col-md-4">
                        {/* <Card name={'webarch'} ext={'png'} title={'WebArch'} /> */}
                        </div>
            </div>


            {/* <div className="row">
                        <div className="col-md-4">
                        <Card name={'webarch'} ext={'png'} title={'WebArch'} />
                        </div>
                        <div className="col-md-4">
                        <Card name={'solo'} ext={'png'} title={'Solosecurities'} />
                        </div>
                        <div className="col-md-4">
                        <Card name={'idea'} ext={'png'} title={'Ideadunes'} />
                        </div>
            </div>  */}
        </div>
    )
}
