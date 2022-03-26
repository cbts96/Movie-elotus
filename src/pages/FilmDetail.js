import React, { useEffect,useState } from "react";
import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../assets/style/cicrle.scss";
import "../assets/style/bg.scss";
import { Tabs, Radio, Space, Rate, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
//import { SET_CHI_TIET_PHIM } from '../../redux/actions/types/QuanLyRapType';
//import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapActions';
import moment from "moment";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { NavLink, useParams } from "react-router-dom";
import { getInfoDetailtAction } from "../redux/actions/filmAction";
import { IMG_HOST } from "../utils/settings/config";

const { TabPane } = Tabs;

export default function Detail(props) {
  const detail = useSelector((state) => ({ ...state }));
const [loading,setLoading]=useState(false);
  //console.log({ detail });

  const dispatch = useDispatch();
  let { id } = useParams();
 
useEffect(()=>{
    
    dispatch(getInfoDetailtAction(id));
    
},[])

  return (
   
    <div className="bg">
       {Object.values(detail.detail).map((value, index) => {
        return (
          <>
            <Divider>
              <h1
                style={{
                  color: "gray",
                  textAlign: "center",
                  fontSize: "30px",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                <>
                  DETAIL OF THE:{" "}
                  <span style={{ color: "blue" }}>{value.original_title}</span>
                  's FILM
                </>
              </h1>
            </Divider>
            
              <div className="grid grid-cols-12">
                <div className="col-span-5 col-start-3">
                  <div className="grid grid-cols-3">
                    <img
                      className="col-span-1"
                      src={IMG_HOST + value.poster_path}
                      style={{ width: "100%", height: 300 }}
                      alt="123"
                    />
                    <div
                      className="col-span-2 ml-5"
                      style={{ marginTop: "25%" , color:"white" }}
                    >
                      <p className="text-sm">
                        Release:{" "}
                        {moment(value.release_date).format("DD.MM.YYYY")}
                      </p>
                      <p className="text-3xl leading-2">{value.original_title}</p>
                      <p>{value.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-4">
                  <h1
                    style={{
                      marginLeft: "15%",
                      color: "yellow",
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Rating
                  </h1>
                  <h1
                    style={{ marginLeft: "5%" }}
                    className="text-green-400 text-2xl"
                  >
                    <Rate
                      allowHalf
                      value={value.vote_average/2}
                      style={{ color: "#78ed78", fontSize: 30 }}
                    />
                  </h1>
                  <div className={`c100 p${value.vote_average * 10} big`}>
                    <span className="text-white">{value.vote_average * 10}%</span>
                    <div className="slice">
                      <div className="bar"></div>
                      <div className="fill"></div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>

              <div className="mt-10 ml-72 w-2/3 container bg-white px-5 py-5">
                <Tabs defaultActiveKey="1" centered>
                  <TabPane tab="Release Day" key="1" style={{ minHeight: 300 }}>
                    <div style={{color:"#949494",fontFamily: "'Nunito', sans-serif", fontSize:"20px"}}>
                      {value.release_date}
                    </div>
                  </TabPane>
                  <TabPane tab="More Info" key="2" style={{ minHeight: 300 }}>
                    <div style={{color:"#949494",fontFamily: "'Nunito', sans-serif", fontSize:"20px"}}>
                        
                        {value.overview}
                        </div>
                  </TabPane>
                  <TabPane tab="Rating" key="3" style={{ minHeight: 300 }}>
                  <StarFilled style={{color:"yellowgreen"}} /> <StarFilled style={{color:"yellowgreen"}} /><span style={{color:"#949494",fontFamily: "'Nunito', sans-serif", fontSize:"20px"}}> {value.vote_average}/{value.vote_count} Total </span> <StarFilled style={{color:"yellowgreen"}} /><StarFilled style={{color:"yellowgreen"}} />
                  </TabPane>
                </Tabs>
              </div>
          </>
        );
    })}
    </div>
      
  )
}
