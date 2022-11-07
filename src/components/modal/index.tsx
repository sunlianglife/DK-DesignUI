/*
 * @Descripttion:
 * @Author: Max.zhang
 * @Date: 2022-03-28 12:55:59
 * @LastEditTime: 2022-03-28 13:04:17
 */
import React from 'react';
import './index.less';
import { Modal } from 'antd';
const MegaModal = (props: { [x: string]: any; className?: "" | undefined; children: any; }) => {
    const { className = '', children, ...rest } = props;
    return (
        <Modal className={` mega-modal ${className} `} {...rest}>
            {children}
        </Modal>
    );
};

MegaModal.useModal = Modal.useModal;

MegaModal.info = Modal.info;

MegaModal.success = Modal.success;

MegaModal.error = Modal.error;

MegaModal.warning = Modal.warning;

MegaModal.warn = Modal.warn;

MegaModal.confirm = Modal.confirm;

MegaModal.destroyAll = Modal.destroyAll;

export default MegaModal;
