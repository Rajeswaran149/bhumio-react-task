import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useSelectedNodeState } from '../contexts'
import { useRemoveFamily } from '../utils';

export const DeleteAlertModel = ({ handleClose = () => { } }) => {

    const [node] = useSelectedNodeState();
    const { removeFamily } = useRemoveFamily();

    return (
        <div>
            <Dialog
                open={true}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure of removing "{node["Name"]}". Data cannot be recoverd onces deleted.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color="error" onClick={() => { removeFamily(node["id"]); handleClose(); }} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
