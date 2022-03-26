import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const Search = ({handleChange}) => {
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );
      
    
  const { Search } = Input;
  return (
    <div>
      <Space>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onChange={handleChange}
        />
      </Space>
    </div>
  );
};

export default Search;
