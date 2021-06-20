import React from "react";
export default function Card(props) {
    return (
        <div
            className="container"
            style={{
                border: "1px solid white",
                borderRadius: 10,
                width: 300,
                padding: "10px 50px",
            }}
        >
            <div className="row">
                <div className="col-sm-2">
                    {props.ext == "svg" ? (
                        <img
                            style={{ width: 50 }}
                            src={
                                require(`C:/Users/SHASHWAT/Desktop/Portfolio-V-3.0/src/Assets/${props.name}.svg`)
                                    .default
                            }
                        />
                    ) : (
                        <img
                            style={{ width: 50 }}
                            src={
                                require(`C:/Users/SHASHWAT/Desktop/Portfolio-V-3.0/src/Assets/${props.name}.png`)
                                    .default
                            }
                        />
                    )}
                </div>
                <div
                    className="col-sm-8 ml-4"
                    style={{ textAlig: "left", alignItems: "left" }}
                    align="left"
                >
                    <h6 style={{ textAlig: "left", color: "white" }}>
                        {props.title}
                    </h6>
                </div>
            </div>
            <p style={{ color: "#C8C9CA", fontSize: 12 }}>{props.desc}</p>
            {/* <div> */}
            {/* <button type="button" class="btn btn-secondary float-left">Secondary</button> */}
            {/* </div> */}
        </div>
    );
}
