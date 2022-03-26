import { useEffect, useState } from "react";
import CardFilm from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getHighestAction } from "../redux/actions/HighestFilm";
import "../assets/style/heading.scss";
import { useHistory } from "react-router-dom";
import { Divider, Skeleton } from "antd";
import { IMG_HOST } from "../utils/settings/config";
import { motion } from "framer-motion";
const TopRated = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { highest } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    setLoading(true);
    const action = getHighestAction();
    dispatch(action);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [loading, setLoading] = useState(false);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return loading ? (
    <Skeleton />
  ) : (
    <>
      <motion.ul variants={container} initial="hidden" animate="visible">
        <div className="flex flex-wrap justify-center">
          <Divider>
            <div className="heading-secondary">ON TOP RATED</div>
          </Divider>
          {highest.highest.map((value, index) => {
            return (
              <motion.li key={index} variants={item}>
                <div class="max-w-sm rounded overflow-hidden shadow-lg p-4">
                  <img
                    class="w-full"
                    src={`${IMG_HOST}${value.poster_path}`}
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      {value.original_title}
                    </div>
                    <p class="text-gray-700 text-base">
                      {value.overview.substring(0, 100)}...
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                    <div
                      onClick={() => {
                        history.push(`/detail/${value.id}`);
                      }}
                      className="bg-green-300 text-center cursor-pointer py-2 bg-secondary my-2 text-success-50 font-bold"
                    >
                      SEE MORE DETAIL
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </div>
      </motion.ul>
    </>
  );
};

export default TopRated;
