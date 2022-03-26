import { useEffect, useState } from "react";
import { Tabs, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getInfoCinema } from "../redux/actions/cinemaAction";
import { getInfoNPListAction } from "../redux/actions/filmAction";
const { TabPane } = Tabs;

const HomeMenu = () => {
  const dispatch = useDispatch();
  const { cinema } = useSelector((state) => ({ ...state }));
  
  useEffect(() => {
    const action = getInfoCinema();
    dispatch(action);
    
  }, []);

  const [tabPosition, setTabPosition] = useState("top");
  return (
    <>
    
     <Divider style={{fontSize:"35px", color:"gray", marginTop:"20px"}}>WHERE YOU CAN SEE THEM?</Divider>
      {cinema.cinema.map((cinemaInfo, index) => {
        return (
          <Tabs tabPosition={tabPosition}>
            <TabPane
              tab={
                <>
              CINEMA:
                <img
                  src={cinemaInfo.logo}
                  key={index}
                  className="rounded-full"
                  width="50"
                />
                
                </>
              }
            >
              <Divider dashed orientation="left">* AVAILABLE LIST: </Divider>
              <Tabs tabPosition={tabPosition}>
                {
                  cinemaInfo.lstCumRap?.map((cinemaInfo2,index)=>{
                    return   <TabPane tab={
                      
                      <div style={{ width: '300px', display: 'flex' }} >
                        
                      <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" /> <br />
                      <div className="text-left ml-2">
                          {cinemaInfo2.tenCumRap}
                          <p className="text-red-200">Chi tiết</p>
                      </div>
                  </div> 
                    }
                  >
                    </TabPane> 
                  })
                }
              </Tabs>
            </TabPane>
          </Tabs>
        );
      })}
    </>
  );
};
export default HomeMenu;
