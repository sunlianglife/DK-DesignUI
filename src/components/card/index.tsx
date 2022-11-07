/**
 * Card 卡片
 * 参考 ant design 组件卡片【Card】使用
 * 
 * */ 
import React from 'react'
import { Card } from 'antd'
import './style.less'
const MCard =( props: any )=>{
    return <Card bordered={false} {...props} />
}

export default MCard