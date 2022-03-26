import React from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'
import './Film_Flip.css'
import { useHistory,NavLink } from 'react-router-dom';
import { IMG_HOST } from '../../utils/settings/config';



export default function Film_Flip(props) {

    const { item } = props;
const history=useHistory();

    return (
        <>
       
        <div className="flip-card mt-2">
           
            <div className="flip-card-inner">
                <div className="flip-card-front">

                    <img src={`${IMG_HOST}${item.poster_path}`} alt="Avatar" style={{ width: 300, height: 300 }} onError={e => {e.target.onerror=null;e.target.src='https://picsum.photos/300/300';}} />
                </div>
                <div className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0 }} >
                        <img src={item.poster_path} alt="Avatar" style={{ width: 300, height: 300 }} onError={e => {e.target.onerror=null;e.target.src='https://picsum.photos/300/300';}} />
                    </div>
                    <div className="w-full h-full" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <div className="rounded-full cursor-pointer"><PlayCircleOutlined style={{ fontSize: '50px' }} /></div>
                            <div className="text-2xl mt-2 font-bold">{item.original_title}</div>
                        </div>
                    </div>

                </div>
            </div>
            <div onClick={()=>{
                history.push(`/detail/${item.id}`); 
            }} className="bg-green-300 text-center cursor-pointer py-2 bg-secondary my-2 text-success-50 font-bold">SEE MORE DETAIL</div>
        </div>
        </>

    )
}