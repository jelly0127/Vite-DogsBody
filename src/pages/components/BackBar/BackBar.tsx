import React, { FC } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const RootBox = styled.div`
  position: sticky;
  top: 49px;
  width: 100%;
  height: 100%;
  /* background-color: #fafafa; */
  z-index: 999;
  flex-direction: row;
  padding: 40px 0 20px 0;

  color: ${(prop: any) => (prop.theme.isDark ? prop.theme.grey3 : prop.theme.grey1)};
  .left_Box {
    flex-direction: row;
    :hover {
      cursor: pointer;
    }
  }
  .text {
    margin-left: 10px;
    font-size: 14px;
  }
  .line {
    margin-left: 20px;
    border: 0.5px solid #ccc;
  }
  .msg {
    margin-left: 20px;
  }
`

type BackBarProps = {
  msg: string
}

const BackBar: FC<BackBarProps> = ({ msg }) => {
  const navigate = useNavigate()
  return (
    <RootBox>
      <div
        onClick={() => {
          navigate('/')
        }}
        className="left_Box"
      >
        <ArrowLeftOutlined />
        <div className="text">Back</div>
      </div>
      <div className="line" />
      <div className="msg">{msg}</div>
    </RootBox>
  )
}
export default BackBar
