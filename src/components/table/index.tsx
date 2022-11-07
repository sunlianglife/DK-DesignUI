/*
 * @Descripttion:
 * @Author: Max.zhang
 * @Date: 2022-03-22 10:06:47
 * @LastEditTime: 2022-04-15 20:57:52
 */
import React from "react";
import { Table, ConfigProvider, Empty } from "antd";
import "./index.less";

const renderCell = (checked: boolean, record: any, index: number, originNode: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined, pagination: { current: any; pageSize: any; }) => {
  let sortNum = (index+1)
  if(pagination){
    const { current, pageSize } = pagination
    sortNum = (current-1) * pageSize + (index+1)
  }
  return (
      <div className="checkboxInxWrapper">
      {!checked && <span className="inx">{sortNum}</span>}
      <span className={checked ? "" : "checkbox"}>{originNode}</span>
    </div>
  );
};

const renderEmpty = (props) => (
  <Empty
    imageStyle={{
      height: 100,
    }}
    description={props.placeholder ? props.placeholder : "暂无数据"}
  >
    {props.action ? props.action : null}
  </Empty>
);

const MegaTable = (props: { [x: string]: any; rowSelection: any; noRank: any; className?: "" | undefined; pagination: any; }) => {
  const { rowSelection, noRank, className = "", pagination, ...restpros } = props;
  const getColumnWidth = (pagination: { current: any; pageSize: any; })=>{
    const { current, pageSize } = pagination
    const width = `${current * pageSize}`.length > 2 ? `${current * pageSize}`.length*12+20 :'42px'
    return width
  }
  return (
    <ConfigProvider renderEmpty={() => renderEmpty(props)}>
      <Table
        size="middle"
        {...restpros}
        pagination={pagination || false}
        className={`mgcc-table ${className}`}
        rowSelection={
          rowSelection && {
            ...(noRank ? {} : { renderCell: (checked, record, index, originNode)=>renderCell(checked, record, index, originNode, pagination),columnWidth:getColumnWidth(pagination) }),
            ...rowSelection,
            
          }
        }
      />
    </ConfigProvider>
  );
};

// MegaTable.defaultProps = Table.defaultProps;
MegaTable.SELECTION_COLUMN = Table.SELECTION_COLUMN;
MegaTable.EXPAND_COLUMN = Table.EXPAND_COLUMN;
MegaTable.SELECTION_ALL = Table.SELECTION_ALL;
MegaTable.SELECTION_INVERT = Table.SELECTION_INVERT;
MegaTable.SELECTION_NONE = Table.SELECTION_NONE;
MegaTable.Column = Table.Column;
MegaTable.ColumnGroup = Table.ColumnGroup;
MegaTable.Summary = Table.Summary;

export default MegaTable;
