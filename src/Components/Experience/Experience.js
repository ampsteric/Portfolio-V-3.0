import React from 'react'
import Card from '../Card/Card'
export default function Experience() {
    return (
        <div className="container-fluid">
            <div className="row">
                    <div className="col-md-4">
                    <Card name={'iee'} ext={'svg'} title={'IEEE SRM'} />
                    </div>
                    <div className="col-md-4">
                    <Card name={'webarch'} ext={'png'} title={'WebArch'} />
                    </div>
                    <div className="col-md-4">
                    <Card name={'HE'} ext={'svg'} title={'SRM HACKEREARTH'} />
                    </div>
            </div>


             <div className="row">
                        <div className="col-md-4">
                        <Card name={'dsc'} ext={'png'} title={'DSCSRM'} />
                        </div>
                        <div className="col-md-4">
                        <Card name={'solo'} ext={'png'} title={'Admere Selvyn'} />
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
