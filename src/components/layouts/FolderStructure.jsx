import React, { useRef, useState } from 'react'
import { useTreeState } from '../../contexts'
import { FolderNode } from '../FolderNode'
import { LayoutHeader } from '../LayoutHeader'
import { Modal } from '@mui/material'
import { FamilyDetailsForm } from '../FamilyDetailsForm'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Search } from "./Search";
import { TreePreviewModal } from '../TreePreviewModal';
import { Portal } from '../Portal';
import { DeleteAlertModel } from '../DeleteAlertModel'

export const FolderStructure = () => {

    const depth = useRef(0);

    const [treeState] = useTreeState();

    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                : null,
        );
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    // add model
    const [openModel, setOpenModel] = useState(false);
    const handleOpenModel = () => setOpenModel(true);
    const handleCloseModel = () => setOpenModel(false);

    // print model
    const [openPrint, setOpenPrint] = useState(false)
    const handleOpenPrint = () => setOpenPrint(true)
    const handleClosePrint = () => setOpenPrint(false)
    const printToPdf = () => {
        handleOpenPrint();
    };

    // delete model
    const [openDelete, setOpenDelete] = useState(false)
    const handleOpenDelete = () => setOpenDelete(true)
    const handleCloseDelete = () => setOpenDelete(false)


    return (
        <div
            onContextMenu={handleContextMenu}
            style={{
                borderBottom: '2px solid black',
                width: '100%',
                flexGrow: 1,
                overflowY: 'auto',
            }}
        >
            <LayoutHeader header={'Family Tree'} />
            <Search />
            {Object.keys(treeState).length > 0 && (

                <ul>
                    <FolderNode node={treeState} key={treeState.id} depth={depth.current} />
                </ul>
            )}

            {Object.keys(treeState).length < 1 && (
                <>
                    <Modal open={true} >
                        <FamilyDetailsForm />
                    </Modal>
                </>
            )}

            <Menu
                open={contextMenu !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                }
            >
                <MenuItem onClick={() => { handleOpenModel(); handleClose(); }}>Add Family Member</MenuItem>
                <MenuItem onClick={() => { handleOpenDelete(); handleClose(); }}>Delete Family Member</MenuItem>
                <MenuItem onClick={() => { printToPdf(); handleClose(); }}>Print Family Member</MenuItem>
            </Menu>
            <Modal
                open={openModel}
                onClose={handleCloseModel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <FamilyDetailsForm handleClose={handleCloseModel} />
            </Modal>
            <Portal>
                <Modal
                    open={openPrint}
                    onClose={handleClosePrint}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div>
                        <TreePreviewModal />
                    </div>
                </Modal>
            </Portal>
            <Modal
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DeleteAlertModel handleClose={handleCloseDelete} />
            </Modal>
        </div>
    );
};
